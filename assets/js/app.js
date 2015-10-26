'use strict';

$(document).ready(function() {

    // write custom functions here


    // call all custom functions
    function init() {

        var scene = new THREE.Scene(),
            renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer(),
            light = new THREE.AmbientLight(0xffffff),
            camera,
            box;

        function initScene() {

            renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementById("webgl-container").appendChild(renderer.domElement);

            scene.add(light);

            camera = new THREE.PerspectiveCamera(
                35,
                window.innerWidth / window.innerHeight,
                1,
                1000
            );

            camera.position.z = 100;
            scene.add(camera);

            box = new THREE.Mesh(
                new THREE.BoxGeometry(20,20,20),
                new THREE.MeshBasicMaterial({color: 0x2980B9})
            );

            box.name = "box";

            scene.add(box);


            render();
        }

        function render() {

            box.rotation.x += 0.01;
            box.rotation.y += 0.01;
            // box.rotation.z += 0.01;

            renderer.render(scene, camera);
            requestAnimationFrame(render);
        }

        window.onload = initScene;

        return {
            scene: scene
        }

        console.log("HOORAY INIT!");
    }

    init();

    console.log("app.js works!");
});
