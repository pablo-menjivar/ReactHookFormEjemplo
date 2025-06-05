import { Link } from 'react-router-dom'
import Titulo from '../components/Titulos'
import useManageImage from '../hooks/useImageChange'
import InputText from '../components/InputText'
import SelectInput from '../components/SelectInput'
import Button from '../components/Button'
import { useForm } from 'react-hook-form'
import useDataUser from '../hooks/users/useDataUser'
import { optionSelect } from '../utils/apiUrl'

const Users = () => {
  //creando el formulario
  const methods = useForm()
  //creando metodo para manejar el formulario
  const { } = useDataUser(methods)
  //usando el hook para manejar los datos del usuario
  const {
    register,
    handleSubmit,
    errors
  } = useDataUser(methods)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/home" className="text-2xl font-bold text-gray-900 mb-4 bg-green-100 p-2 rounded w-auto text-center hover:bg-green-200 transition-colors">
        Back To Dashboard
      </Link>
      <form onSubmit={handleSubmit} className="border-b border-gray-900/10 pb-12 bg-white shadow-md rounded-lg flex flex-col p-4 ">
        <Titulo titulo="User Information" />
        <p className="mt-1 text-sm/6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {/* First Name */}
          <InputText
            type="text"
            name="nombre"
            label="First Name"
            placeholder="Enter your first name"
            register={register}
            errors={errors}
          />
          {/* Last Name */}
          <InputText
            type="text"
            name="apellido"
            label="Last Name"
            placeholder="Enter your last name"
            register={register}
            errors={errors}
          />
          {/* Email */}
          <InputText
            type="email"
            name="correo"
            label="Email Adress"
            placeholder="Enter your email address"
            register={register}
            errors={errors}
          />
          {/* Especialidad */}
          <SelectInput
            label="Especialidad"
            options={optionSelect}
            register={register}
            errors={errors}
            name ="especialidad"

          />
        </div>
        <Button type="submit" text="Save User"/>
      </form>
    </div>
  )
}
export default Users
