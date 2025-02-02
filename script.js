document.getElementById('activar-analisis').addEventListener('click', function() {
    const resultadosAnalisis = document.getElementById('resultados-analisis');
    resultadosAnalisis.innerHTML = `
        <h3>Resultados del Análisis de Suelo:</h3>
        <p>Cultivo sugerido: Maíz</p>
        <p>Probabilidad de éxito: 85%</p>
    `;
});

document.getElementById('selector-cultivo').addEventListener('change', function() {
    const cultivoSeleccionado = this.value;
    const resultadosCondiciones = document.getElementById('resultados-condiciones');
    resultadosCondiciones.innerHTML = `
        <h3>Condiciones de ${cultivoSeleccionado}:</h3>
        <p>Luminosidad: Mucho Sol</p>
        <p>Precipitación: Media</p>
        <p>Humedad: Poca</p>
        <p>Temperatura: Cálido</p>
    `;
});