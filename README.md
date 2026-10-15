# Kedamos! — aplicación para organizar planes

Aplicación móvil/web para crear salidas con amistades, proponer actividades y compartir el resumen del plan.

## Funciones
- Crear salidas con fecha, ubicación, participantes y presupuesto.
- GPS opcional.
- Ideas de actividades según el presupuesto (catálogo orientativo).
- Votación local y selección visual de una idea.
- Compartir el resumen mediante el sistema operativo o el portapapeles.
- Fotos comprimidas guardadas localmente.
- Interfaz que puede abrirse en navegador y empaquetarse como aplicación Android.

## Descargar el APK
El repositorio incluye un flujo de GitHub Actions que compila una versión APK de prueba.

1. Abre la pestaña **Actions**: https://github.com/MarianaBelenHQ/Kedamos-/actions
2. Selecciona **Compilar Kedamos APK**.
3. Si todavía no se ha ejecutado, pulsa **Run workflow** y confirma la rama `main`.
4. Espera a que la ejecución termine con una marca verde.
5. En la ejecución, busca **Artifacts** y descarga `Kedamos-APK`.
6. Extrae el ZIP y abre `app-debug.apk` en tu Android. Es posible que Android te pida autorizar la instalación desde esa fuente.

También se iniciará una compilación cuando cambien los archivos de `www/`, `scripts/` o la configuración de la aplicación.

## Desarrollo local
Se necesita Node.js 20 y Java 17 para compilar Android.

```bash
npm install
npm run build
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
``

El APK generado es de depuración, para pruebas. Para publicar en Google Play hay que generar una versión release firmada.

## Limitaciones actuales
La app guarda datos localmente. No hay cuentas de usuario, sincronización entre dispositivos ni votación remota; el GPS depende de los permisos del sistema y de un contexto compatible. Las ideas y los presupuestos son orientativos.
