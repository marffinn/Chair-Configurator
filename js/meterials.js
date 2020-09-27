var textureCube = new THREE.CubeTextureLoader().load(['json/envmap/posx.jpg', 'json/envmap/negx.jpg', 'json/envmap/posy.jpg', 'json/envmap/negy.jpg', 'json/envmap/posz.jpg', 'json/envmap/negz.jpg']);
textureCube.generateMipmaps = false;

var normalmap = new THREE.TextureLoader().load("json/materials/frame-paint/metallic.jpg");
normalmap.wrapS = THREE.RepeatWrapping;
normalmap.wrapT = THREE.RepeatWrapping;
normalmap.repeat.set(60, 60);

var g21 = new THREE.TextureLoader().load("json/materials/frame-paint/G2-Q391.jpg");
g21.wrapS = g21.wrapT = THREE.RepeatWrapping;
g21.repeat.set(35, 35);

var g22 = new THREE.TextureLoader().load("json/materials/frame-paint/G2-51B03410.jpg");
g22.wrapS = g22.wrapT = THREE.RepeatWrapping;
g22.repeat.set(45, 45);

var g23 = new THREE.TextureLoader().load("json/materials/frame-paint/G2-56M02589.jpg");
g23.wrapS = g23.wrapT = THREE.RepeatWrapping;
g23.repeat.set(32, 32);

var g24 = new THREE.TextureLoader().load("json/materials/frame-paint/G2-391Z352.jpg");
g24.wrapS = g24.wrapT = THREE.RepeatWrapping;
g24.repeat.set(45, 45);

var g25 = new THREE.TextureLoader().load("json/materials/frame-paint/G2-P195T029.jpg");
g25.wrapS = g25.wrapT = THREE.RepeatWrapping;
g25.repeat.set(32, 32);

var g26 = new THREE.TextureLoader().load("json/materials/frame-paint/G2-Q161.jpg");
g26.wrapS = g26.wrapT = THREE.RepeatWrapping;
g26.repeat.set(32, 32);

var g27 = new THREE.TextureLoader().load("json/materials/frame-paint/G2-Q171.jpg");
g27.wrapS = g27.wrapT = THREE.RepeatWrapping;
g27.repeat.set(32, 32);

var g28 = new THREE.TextureLoader().load("json/materials/frame-paint/G2-X494.jpg");
g28.wrapS = g28.wrapT = THREE.RepeatWrapping;
g28.repeat.set(32, 32);

var g29 = new THREE.TextureLoader().load("json/materials/frame-paint/G2-51M04028.jpg");
g29.wrapS = g29.wrapT = THREE.RepeatWrapping;
g29.repeat.set(32, 32);

var g210 = new THREE.TextureLoader().load("json/materials/frame-paint/G2-X494.jpg");
g210.wrapS = g210.wrapT = THREE.RepeatWrapping;
g210.repeat.set(32, 32);

var g211 = new THREE.TextureLoader().load("json/materials/frame-paint/G2-51M04028.jpg");
g211.wrapS = g211.wrapT = THREE.RepeatWrapping;
g211.repeat.set(32, 32);

var g212 = new THREE.TextureLoader().load("json/materials/frame-paint/G2-56QR3493.jpg");
g212.wrapS = g212.wrapT = THREE.RepeatWrapping;
g212.repeat.set(32, 32);

var g213 = new THREE.TextureLoader().load("json/materials/frame-paint/G2-CPC411.jpg");
g213.wrapS = g213.wrapT = THREE.RepeatWrapping;
g213.repeat.set(32, 32);

var g214 = new THREE.TextureLoader().load("json/materials/frame-paint/G2-PPF3MC.jpg");
g214.wrapS = g214.wrapT = THREE.RepeatWrapping;
g214.repeat.set(32, 32);

var g215 = new THREE.TextureLoader().load("json/materials/frame-paint/G2-Q161R004.jpg");
g215.wrapS = g215.wrapT = THREE.RepeatWrapping;
g215.repeat.set(32, 32);

var g216 = new THREE.TextureLoader().load("json/materials/frame-paint/G2-Q191.jpg");
g216.wrapS = g216.wrapT = THREE.RepeatWrapping;
g216.repeat.set(32, 32);

var g217 = new THREE.TextureLoader().load("json/materials/frame-paint/G2-Q391Z113.jpg");
g217.wrapS = g217.wrapT = THREE.RepeatWrapping;
g217.repeat.set(32, 32);

var g218 = new THREE.TextureLoader().load("json/materials/frame-paint/G2-50B20018.jpg");
g218.wrapS = g218.wrapT = THREE.RepeatWrapping;
g218.repeat.set(32, 32);

var g219 = new THREE.TextureLoader().load("json/materials/frame-paint/G2-52M10018.jpg");
g219.wrapS = g219.wrapT = THREE.RepeatWrapping;
g219.repeat.set(32, 32);

var g220 = new THREE.TextureLoader().load("json/materials/frame-paint/G2-56R03112.jpg");
g220.wrapS = g220.wrapT = THREE.RepeatWrapping;
g220.repeat.set(32, 32);

var g221 = new THREE.TextureLoader().load("json/materials/frame-paint/G2-P195.jpg");
g221.wrapS = g221.wrapT = THREE.RepeatWrapping;
g221.repeat.set(32, 32);

var g222 = new THREE.TextureLoader().load("json/materials/frame-paint/G2-PPF4DU.jpg");
g222.wrapS = g222.wrapT = THREE.RepeatWrapping;
g222.repeat.set(32, 32);

var g223 = new THREE.TextureLoader().load("json/materials/frame-paint/G2-Q161R006.jpg");
g223.wrapS = g223.wrapT = THREE.RepeatWrapping;
g223.repeat.set(32, 32);

var g224 = new THREE.TextureLoader().load("json/materials/frame-paint/G2-Q261R021.jpg");
g224.wrapS = g224.wrapT = THREE.RepeatWrapping;
g224.repeat.set(32, 32);

var g225 = new THREE.TextureLoader().load("json/materials/frame-paint/G2-X261Z267.jpg");
g225.wrapS = g225.wrapT = THREE.RepeatWrapping;
g225.repeat.set(32, 32);


var currentFrameMaterial = 'G1-56R0';
var frameMaterials = {
    'G1-1000': new THREE.MeshPhongMaterial({
        color: 0x9E6B28,
        reflectivity: .2,
        specular: 0xbbaa99,
        shininess: 25,
        lightMap: normalmap,
        lightMapIntensity: .2,
        bumpMap: normalmap,
        bumpScale: .001,
        map: normalmap,
        envMap: textureCube,
        combine: THREE.MultiplyOperation
    }),
    'G1-EPS2': new THREE.MeshPhongMaterial({
        color: 0x8C6919,
        reflectivity: .2,
        specular: 0xbbaa99,
        shininess: 25,
        lightMap: normalmap,
        lightMapIntensity: .2,
        bumpMap: normalmap,
        bumpScale: .001,
        map: normalmap,
        envMap: textureCube,
        combine: THREE.MultiplyOperation
    }),
    'G1-56m0': new THREE.MeshPhongMaterial({
        color: 0x190707,
        reflectivity: .05,
        specular: 0xffffff,
        shininess: 15,
        lightMap: normalmap,
        lightMapIntensity: .1,
        bumpMap: normalmap,
        bumpScale: .002,
        map: normalmap,
        envMap: textureCube,
        combine: THREE.MultiplyOperation
    }),
    'G1-5620': new THREE.MeshPhongMaterial({
        color: 0x000000,
        reflectivity: .05,
        specular: 0x333333,
        shininess: 5,
        lightMap: normalmap,
        lightMapIntensity: .1,
        bumpMap: normalmap,
        bumpScale: .002,
        map: normalmap,
        envMap: textureCube,
        combine: THREE.MultiplyOperation
    }),
    'G1-56R0': new THREE.MeshPhongMaterial({
        color: 0x555555,
        reflectivity: .05,
        specular: 0x888888,
        shininess: 8,
        lightMap: normalmap,
        lightMapIntensity: .1,
        bumpMap: normalmap,
        bumpScale: .0005,
        map: normalmap,
        envMap: textureCube,
        combine: THREE.MultiplyOperation
    }),
    'G1-562M': new THREE.MeshPhongMaterial({
        color: 0xCCCCCC,
        reflectivity: .1,
        specular: 0xFFFFFF,
        shininess: 16,
        lightMap: normalmap,
        lightMapIntensity: .1,
        bumpMap: normalmap,
        bumpScale: .001,
        map: normalmap,
        envMap: textureCube,
        combine: THREE.MultiplyOperation
    }),
    'G1-50B0': new THREE.MeshPhongMaterial({
        color: 0x888888,
        reflectivity: .2,
        specular: 0xbbaa99,
        shininess: 40,
        lightMap: normalmap,
        lightMapIntensity: .2,
        bumpMap: normalmap,
        bumpScale: .001,
        map: normalmap,
        envMap: textureCube,
        combine: THREE.MultiplyOperation
    }),
    'G2-Q391': new THREE.MeshPhongMaterial({
        color: 0xF7D9D2,
        reflectivity: 0.2,
        specular: 0xCCCCCC,
        shininess: 1,
        bumpMap: g21,
        bumpScale: .005,
        lightMap: g21,
        lightMapIntensity: .01,
        map: g21,
        envMap: textureCube,
        combine: THREE.MultiplyOperation
    }),
    'G2-51B03410': new THREE.MeshPhongMaterial({
        color: 0xF7D9D2,
        reflectivity: 0.2,
        specular: 0xCCCCCC,
        shininess: 1,
        bumpMap: g22,
        bumpScale: .005,
        lightMap: g22,
        lightMapIntensity: .01,
        map: g22,
        envMap: textureCube,
        combine: THREE.MultiplyOperation
    }),
    'G2-56M02589': new THREE.MeshPhongMaterial({
        color: 0xF7D9D2,
        reflectivity: 0.2,
        specular: 0xCCCCCC,
        shininess: 1,
        bumpMap: g23,
        bumpScale: .005,
        lightMap: g23,
        lightMapIntensity: .01,
        map: g23,
        envMap: textureCube,
        combine: THREE.MultiplyOperation
    }),
    'G2-391Z352': new THREE.MeshPhongMaterial({
        color: 0xF7D9D2,
        reflectivity: 0.2,
        specular: 0xCCCCCC,
        shininess: 1,
        bumpMap: g24,
        bumpScale: .005,
        lightMap: g24,
        lightMapIntensity: .01,
        map: g24,
        envMap: textureCube,
        combine: THREE.MultiplyOperation
    }),
    'G2-P195T029': new THREE.MeshPhongMaterial({
            color: 0xF7D9D2,
            reflectivity: 0.2,
            specular: 0xCCCCCC,
            shininess: 1,
            bumpMap: g25,
            bumpScale: .005,
            lightMap: g25,
            lightMapIntensity: .01,
            map: g25,
            envMap: textureCube,
            combine: THREE.MultiplyOperation
        })
}

var currentFabric = 'alcala22';
var fabricMaterials = {
    'alcala14': 'json/materials/fabrics/alcala 14o.jpg',
    'alcala16': 'json/materials/fabrics/alcala 16o.jpg',
    'alcala21': 'json/materials/fabrics/alcala 21o.jpg',
    'alcala22': 'json/materials/fabrics/alcala 22o.jpg',
    'alcala23': 'json/materials/fabrics/alcala 23o.jpg',
    'alcala25': 'json/materials/fabrics/alcala 25o.jpg',
    'alcala36': 'json/materials/fabrics/alcala 36o.jpg',
    'alcala37': 'json/materials/fabrics/alcala 37o.jpg',
    'alcala38': 'json/materials/fabrics/alcala 38o.jpg',
    'alcala39': 'json/materials/fabrics/alcala 39o.jpg',
    'alcala40': 'json/materials/fabrics/alcala 40o.jpg',
    'alcala41': 'json/materials/fabrics/alcala 41o.jpg'
}

var normalFab = new THREE.TextureLoader().load("json/materials/fabrics/alcala/sd.jpg");
normalFab.wrapS = THREE.RepeatWrapping;
normalFab.wrapT = THREE.RepeatWrapping;
normalFab.repeat.set(1, 1);

var tex = new THREE.TextureLoader().load('json/materials/fabrics/alcala/sd.jpg');
tex.wrapS = THREE.RepeatWrapping;
tex.wrapT = THREE.RepeatWrapping;
tex.repeat.set(.9, .9);