import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiMail, FiLock, FiLogIn, FiUser } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import getValidationError from '../../utils/getValidationErrorFromYup';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

interface FormData {
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});
        console.log(data);

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório!'),
          email: Yup.string()
            .required('E-mail obrigatório!')
            .email('Digite um e-mail válido!'),
          password: Yup.string().min(6, 'Senha deve ser maior que 6 digitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        toast.success('Usuário cadastrado!');

        history.push('/');
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
    [history],
  );

  return (
    <Container>
      <h1>Cadastre-se</h1>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input type="text" icon={FiUser} name="name" placeholder="Nome" />
        <Input type="mail" icon={FiMail} name="email" placeholder="E-mail" />
        <Input
          type="password"
          icon={FiLock}
          name="password"
          placeholder="Senha"
        />

        <Button type="submit">Entrar</Button>
      </Form>
      <Link to="/">
        <FiLogIn />
        Já tem uma conta? Entre agora!
      </Link>

      <ToastContainer />
    </Container>
  );
};

export default SignUp;
