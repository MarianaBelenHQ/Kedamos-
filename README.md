# Kedamos! — reconstrucción independiente

Proyecto nuevo basado exclusivamente en las funciones visibles de la portada pública de squad-adventure-plan.emergent.host. No es extracción del código propietario de Emergent.

## Funciones incluidas
- Creación de salidas: fecha, ubicación, participantes, presupuesto
- GPS opcional
- Cinco ideas de actividades por presupuesto (catálogo orientativo, NO IA)
- Votación local y selección visual de ganador
- Compartir resumen mediante sistema operativo o portapapeles
- Fotos comprimidas y guardadas en localStorage
- Uso local/offline del HTML

## Limitaciones
No contiene cuentas de usuario, backend, sincronización multiusuario, votación remota, IA, búsqueda real de negocios ni almacenamiento en nube. Las ideas y precios son genéricos. Una app de producción requiere backend, autenticación y protección de datos.

## Probar
Abrir `www/index.html` en navegador. En producción y APK los permisos de GPS pueden depender del entorno seguro.

## Compilar APK con GitHub
1. Crear un repositorio NUEVO en GitHub y subir el CONTENIDO de esta carpeta (incluidos archivos ocultos `.github`).
2. Abrir Actions > `Compilar Kedamos APK` > Run workflow.
3. En ejecución exitosa descargar artefacto `Kedamos-APK` y extraer `app-debug.apk`.

La ejecución inicial de GitHub Actions NO se ha probado. El APK es de depuración, no está listo para Google Play.
