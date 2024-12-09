import React, { useState } from 'react';
import './formularioContacto.css';
import PrimaryButton from '../utils/PrimaryButton/PrimaryButton';
import { countries } from '../utils/countries';

const FormularioContacto = () => {

    const [formData, setFormData] = useState({
        nombreCompleto: '',
        correoElectronico: '',
        celularWhatsapp: '',
        rubroNegocio: '',
        nombreNegocio: '',
        paisImportar: 'Afganistán',
        productosImportar: '',
        consultaEspecifica: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault(); 

        try {
        // const response = await fetch('https://tu-endpoint.com/api/formulario', {
        //     method: 'POST',
        //     headers: {
        //     'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        // });

        console.log("formData a enviar: ", formData);

        // if (response.ok) {
            setFormData({
            nombreCompleto: '',
            correoElectronico: '',
            celularWhatsapp: '',
            rubroNegocio: '',
            nombreNegocio: '',
            paisImportar: 'Afganistán',
            productosImportar: '',
            consultaEspecifica: '',
            });
        // } else {
        //     alert('Hubo un error al enviar el formulario.');
        // }
        } catch (error) {
        console.error('Error al enviar el formulario:', error);
        alert('Ocurrió un error inesperado.');
        }
    };

  return (
    <div className='form-contacto-ctn'>
      <div className='form-contacto-title'>
        <h3>
          Compramos por vos y lo <br /> <span>importamos al mejor precio.</span>
        </h3>
        <p>
          Completá el formulario y ponete en contacto con un asesor para iniciar el proceso de cotización, importación y envío del producto que estás buscando.
        </p>
      </div>
      <div className="form-contacto-form">
        <form onSubmit={handleSubmit}>
            <div className="form-row first-row">
                <div className='input-ctn'>
                    <label htmlFor="nombreCompleto">Nombre completo *</label>
                    <input
                    type="text"
                    id="nombreCompleto"
                    name="nombreCompleto"
                    value={formData.nombreCompleto}
                    onChange={handleChange}
                    placeholder="Ingresá tu nombre"
                    required
                    />
                </div>
                <div className='input-ctn'>
                    <label htmlFor="correoElectronico">Correo electrónico *</label>
                    <input
                    type="email"
                    id="correoElectronico"
                    name="correoElectronico"
                    value={formData.correoElectronico}
                    onChange={handleChange}
                    placeholder="Ingresá tu email"
                    required
                    />
                </div>
            </div>
            <div className="form-row second-row">
                <div className='input-ctn'>
                    <label htmlFor="celularWhatsapp">Celular / Whatsapp *</label>
                    <input
                    type="tel"
                    id="celularWhatsapp"
                    name="celularWhatsapp"
                    value={formData.celularWhatsapp}
                    onChange={handleChange}
                    placeholder="Ingresá tu nro. de celular"
                    required
                    />
                </div>
                <div className='input-ctn'>
                    <label htmlFor="rubroNegocio">¿Cuál es el rubro de tu negocio? *</label>
                    <input
                    type="text"
                    id="rubroNegocio"
                    name="rubroNegocio"
                    value={formData.rubroNegocio}
                    onChange={handleChange}
                    placeholder="Escribe a qué se dedica tu negocio"
                    required
                    />
                </div>
            </div>
            <div className="form-row third-row">
                <div className='input-ctn'>
                    <label htmlFor="nombreNegocio">Nombre de tu negocio (opcional)</label>
                    <input
                    type="text"
                    id="nombreNegocio"
                    name="nombreNegocio"
                    value={formData.nombreNegocio}
                    onChange={handleChange}
                    placeholder="Ingresá el nombre de tu empresa"
                    />
                </div>
                <div className='input-ctn'>
                    <label htmlFor="paisImportar">¿Desde qué país deseas importar? *</label>
                    <select
                        id="paisImportar"
                        name="paisImportar"
                        value={formData.paisImportar}
                        onChange={handleChange}
                        required
                        >
                        {countries.map((country) => (
                            <option key={country} value={country}>
                            {country}
                            </option>
                        ))}
                        </select>
                </div>
            </div>
            <div className="form-row forth-row">
                <div className='input-ctn'>
                    <label htmlFor="productosImportar">¿Qué productos deseas importar? *</label>
                    <textarea
                    id="productosImportar"
                    name="productosImportar"
                    value={formData.productosImportar}
                    onChange={handleChange}
                    placeholder="Describe qué productos te gustaría importar y pon uno al lado del otro con una coma"
                    required
                    ></textarea>
                </div>
            </div>
            <div className="form-row fifth-row">
                <div className='input-ctn'>
                    <label htmlFor="consultaEspecifica">¿Tenés alguna consulta en específico? (opcional)</label>
                    <textarea
                    id="consultaEspecifica"
                    name="consultaEspecifica"
                    value={formData.consultaEspecifica}
                    onChange={handleChange}
                    placeholder="Escribe a continuación si tenés alguna consulta adicional"
                    ></textarea>
                </div>
            </div>
          <div>
            <div className="form-contacto-btn">
                <PrimaryButton title="Solicitar asesoramiento" type="submit"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioContacto;
