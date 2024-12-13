fetch('./marker.json')
    .then(response => response.json())
    .then(data => {
        const scene = document.createElement('a-scene');
        scene.setAttribute('embedded', '');
        // scene.setAttribute('arjs', 'sourceType: webcam; trackingMethod: best;');
        scene.setAttribute('arjs', 'sourceType: webcam;');
        
        console.log("Enter loaded json");
        
        data.forEach(item => {
            const marker = document.createElement('a-marker');
            marker.setAttribute('type', 'pattern');
            marker.setAttribute('url', item.marker);

            const gifImage = document.createElement('a-image');
            // gifImage.setAttribute('id', 'gif');
            // gifImage.setAttribute('style', 'display: none');
            gifImage.setAttribute('src', item.asset);
            gifImage.setAttribute('position', '0 0.5 0');
            gifImage.setAttribute('scale', '3 3 3');
            gifImage.setAttribute('look-at', '[camera]');

            marker.appendChild(gifImage);
            scene.appendChild(marker);
        });

        document.querySelector('a-scene').setAttribute('vr-mode-ui', 'enabled: false');

        // Add a camera to the scene
        const camera = document.createElement('a-entity');
        camera.setAttribute('camera', '');
        scene.appendChild(camera);

        document.body.appendChild(scene);
    });
