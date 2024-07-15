import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";
import agustin_perez from "../../assets/all-images/CLIENTESOPINAN/agustin_perez.png";
import emilio_salazar from "../../assets/all-images/CLIENTESOPINAN/emilio_salazar.png";
import isabel_peña from "../../assets/all-images/CLIENTESOPINAN/isabel_peña.png";
import javier_rodriguez from "../../assets/all-images/CLIENTESOPINAN/javier_rodriguez.png";
import maria_revuelta from "../../assets/all-images/CLIENTESOPINAN/maria_revuelta.png";
import mario_crespo from "../../assets/all-images/CLIENTESOPINAN/mario_crespo.png";
import marta_diez from "../../assets/all-images/CLIENTESOPINAN/marta_diez.png";
import pablo_lopez from "../../assets/all-images/CLIENTESOPINAN/pablo_lopez.png";
import samantha_williams from "../../assets/all-images/CLIENTESOPINAN/samantha_williams.png";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        ¡Una experiencia de compra de 10 ! Desde el primer contacto hasta la entrega, el equipo de Automotive fue excepcionalmente profesional y cortés. Me impresionó la amplia selección de vehículos y la atención personalizada que recibí. ¡Gracias por hacer que la compra de mi nuevo coche sea tan emocionante y sin complicaciones!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={pablo_lopez} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Pablo Lopez</h6>
            <p className="section__description">"Compra de vehículo"</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        ¡Una experiencia de alquiler de coches excepcional en Automotive! Reservar mi coche de alquiler fue rápido y fácil, y el vehículo superó mis expectativas. El personal fue amable y profesional, y me brindó toda la información que necesitaba para disfrutar de mi viaje al máximo. ¡Todo rápido y sin elevadas fianzas!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={samantha_williams} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Samantha Williams</h6>
            <p className="section__description">"Experiencia de reserva"</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Desde el momento en que entré, supe que estaba en buenas manos. El personal fue extremadamente atento y se tomó el tiempo para entender mis necesidades y preferencias. Gracias a ellos, encontré el coche perfecto que se adapta a mi estilo de vida. ¡Recomiendo encarecidamente Automotive a todos los que buscan una experiencia de compra de coches excepcional!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={marta_diez} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Marta Diez</h6>
            <p className="section__description">"Atención personalizada"</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Estoy muy contento con el servicio de post-compra de Automotive. Después de adquirir mi vehículo, recibí un seguimiento excepcional por parte del equipo. Estaban disponibles para responder cualquier pregunta que tuviera y se aseguraron de que estuviera completamente satisfecho con mi compra. Además, su compromiso continuo con la satisfacción del cliente me brindó tranquilidad y confianza en mi decisión. ¡Automotive realmente se destaca no solo por la venta, sino también por el cuidado posterior al cliente!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={emilio_salazar} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Emilio Salazar</h6>
            <p className="section__description">"Servicio post-venta"</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Tuve que realizar un viaje de negocios de último minuto y necesitaba un coche de alquiler rápidamente. Esta empresa no solo me proporcionó un coche en poco tiempo, sino que también lo recogieron en mi hotel cuando terminó mi viaje. ¡Un servicio verdaderamente conveniente y confiable!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={mario_crespo} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Mario Crespo</h6>
            <p className="section__description">"Viaje de negocios"</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Como alguien que no sabe mucho sobre mecánica de coches, encontrar un taller en el que pueda confiar es fundamental para mí. Tuve una experiencia desafortunada en el pasado con un taller que no fue transparente en sus precios y reparaciones. Sin embargo, desde que descubrí este taller, mis preocupaciones se han disipado. El equipo aquí es increíblemente honesto y transparente en todo momento. Explican claramente el trabajo que necesita hacerse, proporcionan presupuestos detallados y nunca intentan venderte servicios innecesarios. Gracias a ellos, puedo llevar mi coche sabiendo que está en buenas manos y que no me enfrentaré a sorpresas desagradables en la factura. ¡Es un alivio tener un taller de confianza como este!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={isabel_peña} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Isabel Peña</h6>
            <p className="section__description">"Taller mecánico"</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Desde que confié en esta empresa para alquilar mi coche hace más de un año, he sido testigo de su compromiso excepcional con el servicio al cliente. No solo están pendientes del estado de mi vehículo en todo momento, sino que también me sorprenden constantemente con grandes descuentos en limpieza y mantenimiento. Lo mejor de todo es que ellos se encargan de todas las gestiones, permitiéndome ganar un dinero extra sin preocupaciones. Esta atención personalizada y los beneficios adicionales hacen que mi experiencia de alquiler sea incomparable. ¡Gracias por cuidar tanto de mi coche y de mí como cliente!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={javier_rodriguez} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Javier Rodriguez</h6>
            <p className="section__description">"Alquiler particular"</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Como cliente habitual de esta empresa, puedo decir con confianza que se adaptan totalmente a mis necesidades. Como viajera de negocios, la flexibilidad es clave para mí, y ellos la ofrecen en abundancia. Siempre alquilo con ellos para mis viajes urgentes, y nunca me han decepcionado. Cumplen puntualmente en hora y en calidad. Además, su servicio de dejar el vehículo en la terminal por un bajo coste y recogerlo allí mismo es simplemente brillante. Me ahorra un tiempo valioso y me permite centrarme en mis compromisos laborales. Su compromiso con la excelencia y la comodidad del cliente es insuperable. ¡Gracias por hacer que mis viajes de negocios sean más eficientes y sin complicaciones!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={maria_revuelta} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">María Revuelta</h6>
            <p className="section__description">"Cliente habitual"</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        En cada carrera, este equipo es mi elección para preparar mi coche de competición. Su dedicación y precisión son incomparables, y siempre logran superar mis expectativas. Después de la carrera, su servicio de detailing deja mi coche reluciente. ¡Son mi secreto para destacar en la pista y lucir impecable fuera de ella!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={agustin_perez} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Agustín Pérez</h6>
            <p className="section__description">"Piloto de carreras"</p>

          </div>
        </div>
      </div>

    </Slider>
  );
};

export default Testimonial;
