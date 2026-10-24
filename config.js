/* Datos del coach · lo único que se cambia por cliente. MODO DEMO: todo se guarda solo en este navegador (localStorage). */
window.COACH = {
  app: 'FitZone Training',
  nombre: 'Carlos Silva', titulo: 'Personal Trainer', lema: 'Asume el desafío para un cuerpo fuerte',
  wa: '593998094368', ig: 'krlos_guevara', ig2: 'fitzopne_of',
  // Base de datos. Vacío = modo demo (datos de ejemplo solo en el navegador). Solo va la clave anon, NUNCA service_role.
  supabase: { url: 'https://jukpaqtriemqvxormrgb.supabase.co', anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1a3BhcXRyaWVtcXZ4b3JtcmdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAzODY1ODQsImV4cCI6MjEwNTk2MjU4NH0.4PPIVK2HvvgwrGEtNVn7CozqDCldvlFWnK2rpgrOmHE', schema: 'carlos' },
  diasPrimerMes: 30,   // días de mensualidad con que arranca un cliente nuevo (el primer mes ya viene pagado)
  vapidPublic: 'BChbPR0qddt1X25wPlCbS-MCVnejvN87lKOypiJu3VtP8vse6X_iAfNWH-iEh8U_MUCMsspyCxuEhD6-3PKxJk8',   // clave pública de notificaciones push
  claveDemo: 'coach',   // solo modo demo;   
  servicios: [
    ['Guía nutricional', 'apple'], ['Plan alimenticio (Dieta)', 'plate'], ['Chequeo InBody mensual', 'scale'],
    ['Apoyo vía WhatsApp 24/7', 'chat'], ['Seguimiento 1:1', 'user'], ['Rutinas personalizadas', 'dumbbell'],
    ['Evaluación técnica semanal', 'check'], ['Planes presenciales y virtuales', 'pin'], ['Asesoría en suplementación deportiva', 'pill']
  ]
};
