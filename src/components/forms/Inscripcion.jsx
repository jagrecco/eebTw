
export const Inscripcion = () => {
  return (
    <form className="border-4 border-sky-300 flex flex-col">
      <h2>Inscripción</h2>
      <label htmlFor="">Nombre</label>
      <input type="text" />
      <label htmlFor="">Apellido</label>
      <input type="text" />
      <label htmlFor="">Teléfono</label>
      <input type="text" />
      <label htmlFor="">Mail</label>
      <input type="email" />
      <label htmlFor="">Nivel</label>
      <input type="text" />
    </form>
  )
  }