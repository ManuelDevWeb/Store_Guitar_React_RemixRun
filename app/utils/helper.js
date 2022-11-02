// Funcion para formatear fecha
export const formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);

  const opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return fechaNueva.toLocaleDateString("es-ES", opciones);
};

const source = {
  policy: null,
  lastUpdateTime: "1667341480959",
  expirationPasswordTime: "1666305848963",
  email: "manuel.valencia@mango-soft.com",
  fullName: "Manuel Valencia Londoño",
  confirmEmail: true,
  codeSMS: "2478",
  groups: [
    {
      sk: "01GFVGBFPM337C58HRG02GX2XJ:current",
      pk: "01G7C3VPJQ7WPGN3WWAGABV8ZR:groups",
      color: "#FEF7B6",
      status: "open",
    },
  ],
  password:
    "7f0b80474bad700fdadaf3c6eac588cce888a07ebb38a1a6396a330d737d9278bf9e6c5a801308f5f693da2eb5cd6dc7e9faa897f6f750c38e0cff649e67a865bde3e6673c96f903e426b7f4c49d506b9e48582db63cb25e7e4fd33d34905fea9655dc1a4a7f96bc018372415f8b2d0aa3b2d2633c1f84a7e7db5d13a44d4d06a461f49278d0b2275e1088a308afcaea49aef7ac9a2ec863d9c721ae5e0e0baee297866169df189109562dd6e8a66f33dc67d583c1733d173261e583ebd054502a7868cd62c83df3f271cdbf15fc0d131bb2545095eaadd148b20f0c977836447b22ebc1a18221bcbe7662c98d28eed832f90d3b365438decc4c1064f4b9ed476af40f32cec1e365ecaa426a620495b9b81ac99747ea440d275090ab2dc20489282af709e0cf5f031bad90cd07e9a70eb3beb0352b98a9ea8953349c73cb394b9e0fb0cd7c85ec4c672432ef2f198c3ddd86848294e6cf44082cd3b0a2093a0cd1e175029b227226f112fbe7e6c14f25def5c4203f5901b80ea36821f8e5857930fef7170d06cf9797c3cd4a57e1d3ec763abb754acb255b03e4f855344b2c89b3a747700e645d4f0c752dbaf6363fda2b8ebfc66366aafb73dfd020aee372c1304bce09d563a8a079d97dadc3d044e0f50a847dfcd84a85b95e7c869504f88ff2d27d0e4b91c09aac6c3613272d4a0bdfc64715d7a5e6ce0bff63f9d463ac68",
  roles: [
    {
      sk: "01GFRRV5DRP8APTC2ECW8KN1SR:current",
      pk: "01GFP3EG9N3QN4MPR8QQYR9248:role",
    },
  ],
  creationDateTime: "1666305848963",
  sk: "manuel.valencia:current",
  username: "manuel.valencia",
  pk: "manuel.valencia:users",
  phone: "573165477012",
};

const { password, expirationPasswordTime, codeSMS, ...res } = source;

console.log(res);
