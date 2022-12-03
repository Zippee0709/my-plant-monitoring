var window = self;

const urlB64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

const saveSubscription = async (subscription) => {
  const SERVER_URL = 'https://5c0b-2a01-cb08-55a-2500-d56d-9380-ed5c-22ff.ngrok.io/web/push/subscription';
  const response = await fetch(SERVER_URL, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      AUTHORIZATION:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI0ZmI1ZjgwLTg2N2MtNGE2Mi04Y2M5LWZhYjcwOGViOTFhMCIsImlhdCI6MTY3MDA1OTM1OCwiZXhwIjoxNjcyNzM3NzU4fQ.JMsSSdYQgQVsjS9BMEf0h2UGmUIyUYEIPCQMbJ4R2lw',
    },
    body: JSON.stringify(subscription),
  });
  return response.json();
};

self.addEventListener('activate', async () => {
  try {
    const applicationServerKey = urlB64ToUint8Array(
      'BL-eor8cslVPSHwsfFU6Vc8SapFZpWN2fXANChE8T1lFn-cr2dXDPNVIDgmcGAkR4H3F3WyhvRUTqwDHS6hWeog'
    );
    const options = { applicationServerKey, userVisibleOnly: true };
    const subscription = await self.registration.pushManager.subscribe(options);
    const response = await saveSubscription(subscription);
    console.log(response);
  } catch (err) {
    console.log('Error', err);
  }
});
self.addEventListener('push', function (event) {
  if (event.data) {
    console.log('Push event!! ', event.data.text());
    showLocalNotification('Yolo', event.data.text(), self.registration);
  } else {
    console.log('Push event but no data');
  }
});

const test = () => {
  self.open('http://stackoverflow.com', '_blank');
};

self.addEventListener(
  'notificationclick',
  function (event) {
    switch (event.notification.actions[0].action) {
      case 'open_url':
        event.waitUntil(
          clients
            .matchAll({ type: 'window' })
            .then((clients) => clients.filter((client) => client.url === 'http://localhost:3000/dashboard'))
            .then((matchingClients) => {
              if (matchingClients[0]) {
                return matchingClients[0]
                  .navigate('http://localhost:3000/dashboard?plantId=6094c093-ff2d-48a7-a87a-14602eab9bac')
                  .then((client) => client.focus());
              }

              return clients.openWindow('http://localhost:3000/dashboard?plantId=6094c093-ff2d-48a7-a87a-14602eab9bac');
            })
        );
        break;
      case 'any_other_action':
        clients.openWindow('https://www.example.com');
        break;
    }
  },
  false
);

const showLocalNotification = (title, body, swRegistration) => {
  swRegistration.showNotification('Votre plante est assoiffée', {
    body: "Veuillez lui donner de l'eau",
    icon: '/icon-192x192.png',
    vibrate: [200, 100, 200, 100, 200, 100, 200],
    tag: 'request',
    data: { url: 'https://google.com' }, //the url which we gonna use later
    actions: [{ action: 'open_url', title: 'Read Now' }],
  });
};
