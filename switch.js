//Crear un semaforo:

function semaforo(color) {
    switch (color) {
      case "verde": {
        console.log("¡Sigue!")
        break
      }
      case "amarillo": {
        console.log("¡Detente!")
        break
      }
      case "rojo": {
        console.log("¡No puedes avanzar!")
        break
      }
      default: {
        console.log("¡No reconozco ese color! :(")
      }
    }
  }
  
  semaforo("verde") //'¡Sigue!'






  function semaforo(color){
    switch (color) {
        case "Verde": {
            console.log("Puedes avanzar relajado");
            break
        }
        case "Amarillo": {
            console.log("Mosca que ya va a cambiar a rojo");
            break
        }
        case "Rojo": {
            console.log("No puedes avanzar!");
            break
        }
        case "verde": {
            console.log("Puedes avanzar relajado");
            break
        }
        case "amarillo": {
            console.log("Mosca que ya va a cambiar a rojo");
            break
        }
        case "rojo": {
            console.log("No puedes avanzar!");
            break
        }
        default: {
            console.log("El semaforo no tiene ese color...");
        }
    }
  }
  semaforo("Verde");