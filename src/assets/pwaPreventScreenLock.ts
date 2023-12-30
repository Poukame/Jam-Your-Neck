	// code to make WPA prevents screen dimming and locking
	// The wake lock sentinel.
	let wakeLock:any = null;

	// Function that attempts to request a screen wake lock.
	const requestWakeLock = async () => {
		try {
			wakeLock = await navigator.wakeLock.request();
			wakeLock.addEventListener('release', () => {
				console.log('Screen Wake Lock released:', wakeLock.released);
			});
			console.log('Screen Wake Lock released:', wakeLock.released);
		} catch (err:any) {
			console.error(`${err.name}, ${err.message}`);
		}
	};

    const handleVisibilityChange = async () => {
		if (wakeLock !== null && document.visibilityState === 'visible') {
			await requestWakeLock();
		}
	};

export {requestWakeLock, handleVisibilityChange}