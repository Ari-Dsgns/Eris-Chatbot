export const getBotReply = (userInput) => {
  const input = userInput.toLowerCase();

  if (input.includes('biblioteca')) {
    return 'La biblioteca abre de 8:00 a 20:00.';
  }

  if (input.includes('campus virtual')) {
    return 'Puedes acceder al campus virtual a través de la página web de la universidad con tu usuario y contraseña.';
  }

  if (input.includes('matricula')){
    return 'La matrícula para el próximo curso se abre el 1 de septiembre y cierra el 30 de septiembre.';
  }

  if (input.includes('profesor')) {
    return 'Puedes contactar a tu profesor a través del correo electrónico institucional o en su horario de tutorías.';
  }
  if (input.includes('examen')) {
    return 'Los exámenes finales comienzan el 10 de julio.';
  }

  if (input.includes('gracias')) {
    return '¡De nada! 😊';
  }

  if (input.includes('hola')) {
    return '¡Hola! ¿Cómo puedo ayudarte?';
  }

  
  if (input.includes('becas')){
    return 'La información sobre las becas y ayudas al estudio, están publicadas en la página web del ministerio de educación y ciencia.';
  }

  if (input.includes('calificaciones')) {
    return 'Puedes ver tus calificaciones en el portal del estudiante, en la sección de "Mis Calificaciones".';
  }

  const keywords2 = ['horario', 'clases', 'cursos'];
  if (keywords2.some(word => input.includes(word))) {
    return 'El horario de clases está disponible en el portal del estudiante.';
  }

  return 'No tengo esa información. ¿Podrías reformular tu pregunta?';
};