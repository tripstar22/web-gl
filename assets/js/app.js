'use strict';

$(document).ready(function() {

    // write custom functions here


    // call all custom functions
    function init() {

        var scene = new THREE.Scene(),
            renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer(),
            light = new THREE.AmbientLight(0xffffff),
            camera,
            controls,
            box;

        function initScene() {

            renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementById("webgl-container").appendChild(renderer.domElement);

            // renderer.shadowMapEnabled = true;

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
                new THREE.MeshPhongMaterial({
                    color: 0x2980B9,
                    amibient: 0x0088bb,
                    specular: 0xffffff,
                    shininess: 100
                    //transparent: true,
                    //opacity: 7
                })
            );

            box.name = "box";
            //box.castShadow = true;

            scene.add(box);

            var stats = new Stats();
            stats.setMode(0);

            stats.domElement.style.postion = 'absolute';
            stats.domElement.style.left = '0px';
            stats.domElement.style.top = '0px';
            document.body.appendChild(stats.domElement);

            controls = new THREE.OrbitControls(camera);
            controls.addEventListener('change', render);

            //light= new THREE.DirectionalLight(new THREE.Color("#ffffff"));
            //light.position.set(0, 50, 0);
            //light.castShadow = true;

            render();
        }

        function render() {

            //box.rotation.x += 0.01;
            //box.rotation.y += 0.01;
            // box.rotation.z += 0.01;

            renderer.render(scene, camera);
            requestAnimationFrame(render);
        }

        //function checkKey(e) {
        //
        //    var left = 37,
        //        up = 38,
        //        right = 39,
        //        down = 40,
        //        increment = 1;
        //
        //    e = e || window.event;
        //
        //    if (e.keyCode == up) {
        //        camera.position.z -= increment;
        //    } else if (e.keyCode == down) {
        //        camera.position += increment;
        //    } else if (e.keyCode == left) {
        //        camera.position.x -= increment;
        //    } else if (e.keyCode == right) {
        //        camera.postion.x += increment;
        //    }
        //}

        //window.onkeydown = checkKey;
        window.onload = initScene;

        return {
            scene: scene
        }

        console.log("HOORAY INIT!");
    }

    init();

    console.log("app.js works!");
});
