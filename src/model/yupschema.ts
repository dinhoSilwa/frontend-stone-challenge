import * as yup from 'yup'
export const schema = yup.object().shape({
  dolar: yup
    .string()
    .required('Digite o valor do dólar'), 
  stateRate: yup
    .string()
    .required('Digite o valor da taxa estadual'), 
  PayMethod: yup
    .string()
    .oneOf(['money', 'card'], 'Escolha uma Forma de Pagamento válida (dinheiro ou cartão)')
    .required('Escolha uma Forma de Pagamento'), 
});