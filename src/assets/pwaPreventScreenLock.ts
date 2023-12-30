const navigatorWithWakeLock = navigator as Navigator & { wakeLock: any };


// The wake lock sentinel.
let wakeLock: any = null;

// Function that attempts to request a screen wake lock.
const requestWakeLock = async () => {
  try {
    if ('wakeLock' in navigatorWithWakeLock) {
      wakeLock = await navigatorWithWakeLock.wakeLock.request();
      wakeLock.addEventListener('release', () => {
        console.log('Screen Wake Lock released:', wakeLock.released);
      });
      console.log('Screen Wake Lock released:', wakeLock.released);
    } else {
      console.error('Wake Lock API not supported');
    }
  } catch (err: any) {
    console.error(`${err.name}, ${err.message}`);
  }
};

const handleVisibilityChange = async () => {
  if (wakeLock !== null && document.visibilityState === 'visible') {
    await requestWakeLock();
  }
};

export { requestWakeLock, handleVisibilityChange };