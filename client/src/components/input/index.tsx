import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import theme from '../../styles/theme';
import { Chevron, Direction } from '../chevron/styles';
import {
  Label,
  Input,
  InputContainer,
  Error,
  ChevronWrapper,
  ImageWrapper,
  Options,
  OptionItem
} from './styles';
import { strSeparate, isValidDate } from '../../utils/general';

interface ICustomInput {
  id: string;
  label: string;
  error?: string;
  width?: string;
  imgSrc?: string;
  type?: string;
  options?: string[];
  setStateCard?: React.Dispatch<React.SetStateAction<string>>;
  setCardIsEnterCVV?: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomInput: FC<ICustomInput> = ({
  id,
  label,
  imgSrc,
  error = '',
  width = '100%',
  type = 'input',
  options = [],
  setStateCard = null,
  setCardIsEnterCVV
}) => {
  const [text, setText] = useState('');
  const [hasError, setHasError] = useState(false);
  const [showSelect, setShowSelect] = useState(false);

  useEffect(() => {
    setStateCard && setStateCard(text);
  }, [text]);

  useEffect(() => {
    if (type === 'select' && options.length > 0) setText(options[0]);
  }, []);

  const validation = (type: string) => {
    switch (id) {
      case 'number': {
        const trimText = text.replaceAll(' ', '');
        let testNumber = 0;
        trimText.split('').forEach((e) => (testNumber += parseInt(e)));

        if (!testNumber) {
          setHasError(true);
        } else {
          if (trimText.length === 16) {
            setText(strSeparate(trimText, ' ', 4));
            setHasError(false);
          } else setHasError(true);
        }
        break;
      }
      case 'name': {
        setHasError(!text.trim().includes(' '));
        setText(text.toUpperCase());
        break;
      }
      case 'valid': {
        let trimText = text.replaceAll(' ', '').replace('/', '');
        if (trimText.length === 3) trimText = '0' + trimText;
        if (trimText.length === 4) {
          setHasError(!isValidDate(trimText));
          setText(trimText[0] + trimText[1] + '/' + trimText[2] + trimText[3]);
        } else setHasError(true);
        break;
      }
      case 'CVV': {
        setCardIsEnterCVV(false);
        setHasError(text.length !== 3);
        let testNumber = 0;
        text.split('').forEach((e) => (testNumber += parseInt(e)));
        if (!testNumber) setHasError(true);
        break;
      }
      case 'installment': {
        setHasError(text.length === 0);
        break;
      }
    }

    if (type === 'select') {
      const tmr = setInterval(() => {
        setShowSelect(false);
        clearInterval(tmr);
      }, 200);
    }
  };

  const handleOpen = () => {
    setShowSelect(true);
  };

  const handleFocus = () => {
    if (type === 'select') handleOpen();

    if (id === 'CVV') setCardIsEnterCVV(true);
  };

  return (
    <InputContainer className="input-container" width={width}>
      <Input
        id={id}
        name={id}
        placeholder=" "
        error={hasError}
        onBlur={() => validation(type)}
        onChange={(event) => setText(event.target.value)}
        onFocus={() => handleFocus()}
        value={text}
        readOnly={type === 'select'}
      />
      <Error>{error}</Error>
      <Label htmlFor={id}>{label}</Label>
      {imgSrc && (
        <>
          <ImageWrapper className="img-info">
            <Image src={imgSrc} alt={label} width={13} height={13} />
          </ImageWrapper>
        </>
      )}
      {type === 'select' && (
        <label htmlFor={id}>
          <ChevronWrapper>
            <Chevron
              direction={Direction.down}
              margin="0"
              color={theme.colors.red.normal}
              size={{ laptop: 8, mobile: 8 }}
            />
          </ChevronWrapper>
        </label>
      )}
      {options.length > 0 && (
        <Options className={`show-${showSelect}`}>
          <ul>
            {options.map((opt) => (
              <OptionItem key={opt} onClick={() => setText(opt)}>
                {opt}
              </OptionItem>
            ))}
          </ul>
        </Options>
      )}
    </InputContainer>
  );
};

export default CustomInput;
