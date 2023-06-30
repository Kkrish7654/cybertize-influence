import * as Yup from 'yup'

export const userSchema = Yup.object().shape({
  firstName:Yup.string()
  .min(2, 'to short')
  .max(50,"to long")
  .required("first name is required"),
  
  lastName:Yup.string()
  .min(2, 'to short')
  .max(50,"to long")
})