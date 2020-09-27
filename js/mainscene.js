var curModel = 'rama_m01a';
var curOparcie = 'fat';

var scene, camera, renderer;
var controls;
var SCREEN_WIDTH, SCREEN_HEIGHT;
var loader, model;
var group = new THREE.Object3D();
var mscale = 15;

var manager = new THREE.LoadingManager();
manager.onStart = function(){
    $('.loaderBar').removeClass('loaderScaleAfter');
}
manager.onProgress = function (item, loaded, total) {

    var loadedBar = (loaded / total * 100);
    $('.progressBar').css({
        'width': (loaded / total * 100) + '%'
    });

    if ((loaded / total * 100) >= 100) {
        $('.loaderBar').addClass('loaderScaleAfter');
    }
}
manager.onLoad = function () {
    scene.add(group);
}

var loader = new THREE.JSONLoader(manager);

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 500);
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setClearColor(0xffffff);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.minDistance = 10;
    controls.maxDistance = 25;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 1;
    controls.addEventListener('change', render);

    camera.position.x = 15;
    camera.position.y = 10;
    camera.position.z = 15;
    camera.lookAt(scene.position);

    h1 = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.3);
    h1.position.set(0, 500, 0);
    scene.add(h1);

    var s1 = new THREE.SpotLight(0xffffff);
    s1.position.set(300, 300, -1000);
    scene.add(s1);

    var s2 = new THREE.SpotLight(0xffffff);
    s2.position.set(-300, 300, 1000);
    scene.add(s2);

    protoOparcie = new THREE.TextureLoader().load(fabricMaterials[currentFabric], function () {
        mat = new THREE.MeshPhongMaterial({
            map: protoOparcie,
            shininess: 0,
            reflectivity: 0,
            bumpMap: normalmap,
            bumpScale: .0001,
            combine: THREE.MultiplyOperation
        });
        loader.load('json/' + curOparcie + '.json', function (geo) {
            oparcie = new THREE.Mesh(geo, mat);
            oparcie.material.needsUpdate = true;
            oparcie.position.set(0, 0, 0);
            oparcie.scale.set(mscale, mscale, mscale);
            group.add(oparcie);

        });
    });

    protoSiedzenie = new THREE.TextureLoader().load(fabricMaterials[currentFabric], function () {
        mat = new THREE.MeshPhongMaterial({
            map: protoSiedzenie,
            shininess: 0,
            reflectivity: 0,
            bumpMap: normalmap,
            bumpScale: .0001,
            combine: THREE.MultiplyOperation
        });
        loader.load('json/siedzenie_uniwersal.json', function (geo) {
            siedzenie = new THREE.Mesh(geo, mat);
            siedzenie.material.needsUpdate = true;
            siedzenie.position.set(0, 0, 0);
            siedzenie.scale.set(mscale, mscale, mscale);
            group.add(siedzenie);

        });
    });

    loader.load('json/rama_m01a.json', function (geometry, material) {
        rama_model = new THREE.Mesh(geometry, frameMaterials[currentFrameMaterial]);
        rama_model.material.needsUpdate = true;
        rama_model.scale.set(mscale, mscale, mscale);
        rama_model.position.set(0, 0, 0);
        group.add(rama_model);
    });

    loader.load('json/rama_nogi.json', function (geometry, material) {
        rama_nogi = new THREE.Mesh(geometry, frameMaterials[currentFrameMaterial]);
        rama_nogi.material.needsUpdate = true;
        rama_nogi.scale.set(mscale, mscale, mscale);
        rama_nogi.position.set(0, 0, 0);
        group.add(rama_nogi);
    });

    loader.load('json/rama_siedzenie.json', function (geometry, material) {
        rama_siedzenie = new THREE.Mesh(geometry, frameMaterials[currentFrameMaterial]);
        rama_siedzenie.material.needsUpdate = true;
        rama_siedzenie.scale.set(mscale, mscale, mscale);
        rama_siedzenie.position.set(0, 0, 0);
        group.add(rama_siedzenie);
    });

    loader.load('json/rama_wyg_wzmocnienie.json', function (geometry, material) {
        rama_wyg_wzmocnienie = new THREE.Mesh(geometry, frameMaterials[currentFrameMaterial]);
        rama_wyg_wzmocnienie.material.needsUpdate = true;
        rama_wyg_wzmocnienie.scale.set(mscale, mscale, mscale);
        rama_wyg_wzmocnienie.position.set(0, 0, 0);
        group.add(rama_wyg_wzmocnienie);
    });

    loader.load('json/rama_nogi_wzmocnienie.json', function (geometry, material) {
        rama_nogi_wzmocnienie = new THREE.Mesh(geometry, frameMaterials[currentFrameMaterial]);
        rama_nogi_wzmocnienie.material.needsUpdate = true;
        rama_nogi_wzmocnienie.scale.set(mscale, mscale, mscale);
        rama_nogi_wzmocnienie.position.set(0, 0, 0);
        group.add(rama_nogi_wzmocnienie);
    });

    loader.load('json/rama_wzmocnienie.json', function (geometry, material) {
        rama_wzmocnienie = new THREE.Mesh(geometry, frameMaterials[currentFrameMaterial]);
        rama_wzmocnienie.material.needsUpdate = true;
        rama_wzmocnienie.scale.set(mscale, mscale, mscale);
        rama_wzmocnienie.position.set(0, 0, 0);
        group.add(rama_wzmocnienie);
    });

    loader.load('json/stopki.json', function (geometry, material) {
        stopki = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(material));
        stopki.material.needsUpdate = true;
        stopki.scale.set(mscale, mscale, mscale);
        stopki.position.set(0, 0, 0);
        group.add(stopki);
    });

    loader.load('json/zatyczki.json', function (geometry, material) {
        zatyczki = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial(material));
        zatyczki.material.needsUpdate = true;
        zatyczki.scale.set(mscale, mscale, mscale);
        zatyczki.position.set(0, 0, 0);
        group.add(zatyczki);
        $('.sidebar').toggleClass('slide');
    });

    $("#container").append(renderer.domElement);
}

function render() {
    group.rotation.y += 0.001;
}

function animate() {
    requestAnimationFrame(animate);
    render();
    renderer.render(scene, camera);
}
init();
animate();

$(window).resize(function () {
    SCREEN_WIDTH = window.innerWidth;
    SCREEN_HEIGHT = window.innerHeight;
    camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
    camera.updateProjectionMatrix();
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
});
