import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAuth } from '../../hooks';

import getValidationError from '../../utils/getValidationErrorFromYup';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

interface FormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});
        console.log(data);

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório!')
            .email('Digite um e-mail válido!'),
          password: Yup.string().required('Senha obrigatória!'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn(data.email);

        history.push('/home');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationError(err);

          formRef.current?.setErrors(errors);

          err.inner.forEach(error => {
            toast.error(error.message);
          });
        }
      }
    },
    [history, signIn],
  );

  return (
    <Container>
      <h1>Faça seu login</h1>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input type="mail" icon={FiMail} name="email" placeholder="E-mail" />
        <Input
          type="password"
          icon={FiLock}
          name="password"
          placeholder="Senha"
        />

        <Button type="submit">Entrar</Button>
      </Form>
      <Link to="/signup">
        <FiLogIn />
        Criar conta
      </Link>

      <ToastContainer />
    </Container>
  );
};

export default SignIn;
