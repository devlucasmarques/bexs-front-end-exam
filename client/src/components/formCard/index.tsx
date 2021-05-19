import React, { FC, useEffect } from 'react';
import { Form, Button, ButtonWrapper } from './styles';
import icoInfo from './ico-info.png';
import CustomInput from '../input';

interface IFormCard {
  setCardNumber: React.Dispatch<React.SetStateAction<string>>;
  setCardName: React.Dispatch<React.SetStateAction<string>>;
  setCardValid: React.Dispatch<React.SetStateAction<string>>;
  setCardCVV: React.Dispatch<React.SetStateAction<string>>;
  setCardIsEnterCVV: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormCard: FC<IFormCard> = ({
  setCardNumber,
  setCardName,
  setCardValid,
  setCardCVV,
  setCardIsEnterCVV
}) => {
  return (
    <Form>
      <CustomInput
        id="number"
        label="Número do cartão"
        error="Número de cartão inválido"
        setStateCard={setCardNumber}
      />
      <CustomInput
        id="name"
        label="Nome (igual ao cartão)"
        error="Insira seu nome completo"
        setStateCard={setCardName}
      />
      <CustomInput
        id="valid"
        label="Validade"
        error="Data inválida"
        width="48%"
        setStateCard={setCardValid}
      />
      <CustomInput
        id="CVV"
        label="CVV"
        error="Código inválido"
        width="48%"
        imgSrc={icoInfo}
        setStateCard={setCardCVV}
        setCardIsEnterCVV={setCardIsEnterCVV}
      />
      <CustomInput
        id="installment"
        label="Número de parcelas"
        error="Insira o número de parcelas"
        type="select"
        options={[
          '1x R$1.000,00 sem juros',
          '2x R$500,00 sem juros',
          '3x R$340,00 com juros',
          '4x R$255,00 com juros',
          '5x R$220,00 com juros'
        ]}
      />
      <ButtonWrapper>
        <Button type="button">Continuar</Button>
      </ButtonWrapper>
    </Form>
  );
};

export default FormCard;
