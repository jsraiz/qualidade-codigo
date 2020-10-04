/**
 * Condicionais negativas é um mal para a humanidade. Traz
 * complexidade no entendimento da condicional, podendo
 * ocasionar bugs.
 * 
 * TODO: Refatorar para utilizar condicionais positivas
 * ? Esse script possui testes
 * 
 * ! Regras de saída da function:
 * 
 * * all online & all connected  => connected
 * * all online & some connected => partially disconnected
 * * all online & none connected => disconnected
 * * some online => partially offline
 * * none online => offline
 */

export default function getStatus(onlineArr, connectedArr) {
  let status;
  if (!onlineArr.includes(true)) {
    status = "Offline";
  } else if (!onlineArr.includes(false)) {
    if (!connectedArr.includes(true)) {
      status = "Disconnected";
    } else if (!connectedArr.includes(false)) {
      status = "Connected";
    } else {
      status = "Partially disconnected";
    }
  } else {
    status = "Partially offline";
  }

  return status;
}