
export const Inscripcion = () => {
  return (
    <form id="InfoForm" className="border-sky-200 px-2 py-4 shadow-2xl flex flex-col ">
      <h2 className="text-center font-bold text-sky-600">Solicitud de Información</h2>
      <label className="text-sky-600" htmlFor="">Nombre</label>
      <input placeholder="Ingrese su nombre" className="bg-sky-100 font-thin px-1" type="text" />
      <label className="text-sky-600" htmlFor="">Apellido</label>
      <input placeholder="Ingrese su apellido" className="bg-sky-100 font-thin px-1" type="text" />
      <label className="text-sky-600" htmlFor="">Teléfono</label>
      <input placeholder="Ingrese su teléfono" className="bg-sky-100 font-thin px-1" type="text" />
      <label className="text-sky-600" htmlFor="">Mail</label>
      <input placeholder="Ingrese su em@il" className="bg-sky-100 font-thin px-1" type="email" />
      <label className="text-sky-600" for = "level" htmlFor="">Nivel</label>
      <select className="bg-sky-100 font-thin" name="Nivel" id="level">
        <option className="text-sky-600 font-thin" value="Inicial">Inicial</option>
        <option className="text-sky-600 font-thin" value="Primaria">Primaria</option>
        <option className="text-sky-600 font-thin" value="Secundario">Secundario</option>
      </select>
      <label className="text-sky-600" htmlFor="">Su consulta</label>
      <textarea className="bg-sky-100 font-thin px-1" name="mensaje" id="mensaje" cols="30" rows="10" placeholder="Ingrese por favor su comentario aquí"/>
      <input className="text-sky-600 font-bold max-w-[50%] px-1 border-2 my-2 hover:cursor-pointer" type="submit" />

    </form>
  )
  }