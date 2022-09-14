import * as THREE  from "../node_modules/three/build/three.module";
import {GUI} from '../node_modules/dat.gui/build/dat.gui.module.js';
// import { Sky } from "../node_modules/three/examples/jsm/objects/Sky.js";
import {OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls.js"


// const image2base64 = require("../node_modules/image-to-base64/image-to-base64.js");
// import { lightPRobeGenerator}
// import datGuiImage from 'dat.gui.image'

// Setting the scene
let  controls , width  , height;
var strDownloadMime = "image/octet-stream";
// let validBase64 = new Reg  Exp("^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{0,2}==)$","gim");
var scene = new THREE.Scene();
// const loader  = new THREE.TextureLoader();
// const bgTexture = loader.load('https://images.unsplash.com/photo-1574080913417-749f6fd852f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80');
// scene.background = bgTexture;
          // Set the background color

            // Add Sky
  // var  sky = new Sky();
  // sky.scale.setScalar( 450000 );
  // scene.add( sky );

// Camera Object

// adding first cube...
var camera = new THREE.PerspectiveCamera(2, window.innerWidth / window.innerHeight, 3, 1000);
camera.position.set(-30,40,40)
camera.lookAt(scene.position);
scene.add(camera);
// Making the cube
var geometry = new THREE.BoxGeometry(0.1, 3 , 3) 
var material = new THREE.MeshBasicMaterial({
  transparent: false,  
  // color: 0xffff00,
  // map:loader.load("../textures/ferrari.jpg"),
})
var cube=new THREE.Mesh(geometry , material)
cube.position.set(0, 0, 0);
cube.rotation.set(0, 0, 0);
scene.add(cube);


// adding second frame...

var geome = new THREE.BoxGeometry(0.1,2.5,2.5);
var mater = new THREE.MeshBasicMaterial({transparent:false});
var mesh = new THREE.Mesh(geome , mater);
cube.add(mesh);
mesh.position.set(0, 0, 0);


// Making StandoffTexturee




var geom = new THREE.CylinderGeometry( 0.1,0.1, 0.3,64 );
var mate = new THREE.MeshBasicMaterial({color: 0x000});
var standoff = new THREE.Mesh(geom , mate);
cube.add(standoff);
geom.rotateZ(-Math.PI * 0.5);
standoff.position.set(0,1.2,1.3);

var geom2 = new THREE.CylinderGeometry( 0.1,0.1,0.3,64 );
var mate2= new THREE.MeshBasicMaterial({color: 0x000});
var standoff2 = new THREE.Mesh(geom2 , mate2);
cube.add(standoff2);
geom2.rotateZ(-Math.PI * 0.5);
standoff2.position.set(0,1.2,-1.3);

var geom3 = new THREE.CylinderGeometry( 0.1,0.1,0.3 ,64 );
var mate3 = new THREE.MeshBasicMaterial({color: 0x000});
var standoff3 = new THREE.Mesh(geom3 , mate3);
cube.add(standoff3);
geom3.rotateZ(-Math.PI * 0.5);
standoff3.position.set(0,-1.2,1.3);

var geom4 = new THREE.CylinderGeometry( 0.1,0.1,0.3,64 );
var mate4 = new THREE.MeshBasicMaterial({color: 0x000});
var standoff4 = new THREE.Mesh(geom4 , mate4);
cube.add(standoff4);
geom4.rotateZ(-Math.PI * 0.5);
standoff4.position.set(0,-1.2,-1.3);


// STANDOFF Texture offset

// // Render Object#c4591f
// var planeGeometry = new THREE.PlaneGeometry(200,200 ,200);
// var planeMaterial = new THREE.MeshBasicMaterial({color:0x1ccac0});
// var plane = new THREE.Mesh(planeGeometry, planeMaterial);

// plane.rotation.x = -0.5 *Math.PI ;
// plane.receiveShadow = true;
// scene.add(plane);

var renderer = new THREE.WebGLRenderer({ antialias: true , alpha: true ,preserveDrawingBuffer: true } );
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


	// controls

  controls = new OrbitControls( camera, renderer.domElement );

  //controls.update() must be called after any manual changes to the camera's transform
  camera.position.set( 440, 200, 100 );
  controls.update();

	controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
	controls.dampingFactor = 0.5;
	camera.position.set( 400, 200, 100 );

	controls.screenSpacePanning = true;

	controls.minDistance = 100;
	controls.maxDistance = 500;


	controls.maxPolarAngle = Math.PI * 2 ;


// Options to be added to the GUI

var options = {
  velx: 0,
  vely: 0,
  camera: {
    speed: 0
  },
  stop: function() {
    this.velx = 0;
    this.vely = 0;
	  camera.position.z = 200;
    camera.position.x = 400;
    camera.position.y = 100;
    cube.scale.x = 1;
    cube.scale.y = 1;
    cube.scale.z = 1;
    mesh.scale.x = 1;
    mesh.scale.y = 1;
    mesh.scale.z = 1;
  },
  reset: function() {
    this.velx = 0;   
    this.vely = 0;
    camera.position.z = 200;
    camera.position.x = 400;
    camera.position.y = 100;
    cube.scale.x = 1;
    cube.scale.y = 1;
    cube.scale.z = 1;
    cube.material.color.set(0xffffff);
    mesh.scale.x = 1;
    mesh.scale.y = 1;
    mesh.scale.z = 1;
    material = new THREE.MeshBasicMaterial({map:0xffffff})
    mesh.material =material;
    wireframe.material.color.set(0x000000)
    standoff.material.color.set(0x000000)
    standoff2.material.color.set(0x000000)
    standoff3.material.color.set(0x000000)
    standoff4.material.color.set(0x000000)
  
  },
};  


var gui = new GUI();   

var cam = gui.addFolder('Camera');
// cam.add(options.camera, 'speed', 0, 0.0010).listen();
cam.add(camera.position,'y', 0, 1000).listen();
cam.open();


// Height Weidth and Length Controler


var box = gui.addFolder('Cube' );
box.add(cube.scale, 'x', 0, 0.1).name('Width');//.listen();
box.add(cube.scale, 'y', 0, 3 ).name('Height');//.listen();
box.add(cube.scale, 'z', 0, 6).name('Length');//.listen();

box.open();

// color'

var abc = gui.addFolder('Color' );
var conf = { color : '#ffae23' };    
gui.addColor(conf, 'color').onChange( function(colorValue) {
    cube.material.color.set(colorValue);
    // cube1.material.color.set(colorValue);

  })
abc.open();
// Iamge Section


var image = gui.addFolder('Add-Image')
image.open();
var GuiConfig = function  () {
    this['Image Path'] = 'Image-Path';  // default image path
    image.src = 'webgl/mdm_webgl_20.png';

    this['Upload Image'] = function(upload) {
        // you need to create an input element in HTML
        var input = document.getElementById('img-path');
        // input.appendChild(image);
        // console.log(input.appendChild(image));
        // console.log(image.src)
        input.addEventListener('change', function(e) {
             var file = e.target.files[0];
          
            var reader = new FileReader();
            reader.onloadend = (onload)=> {
              console.log('RESULT', reader.result)
               new THREE.TextureLoader().load(reader.result ,function onLoad(texture){
                // const line = new THREE.LineSegments( wireframe );
              // console.log('LINE', texture)
              // this['Image Path'] = 'reader.result';  // default image path

              
              var material = [
                new THREE.MeshBasicMaterial({map:texture,transparent:false}),
                new THREE.MeshBasicMaterial({ transparent: false}),
                new THREE.MeshBasicMaterial(),
                new THREE.MeshBasicMaterial(),
                new THREE.MeshBasicMaterial(),
                new THREE.MeshBasicMaterial(),
               ]
              //  var mat = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 4 } );
              //  var wireframe = new THREE.LineSegments( geometry, material );
              //  wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
              //  cube.add( wireframe )
              console.log(material)
              // const cube = new THREE.Mesh(geometry , mat)
              // scene.add(cube1)
              console.log(cube)
              material.depthtset = false;
              mesh.material = material;
              // wireframe.push(cube);
              material.map= texture
              //material.map.needsupdate = true;
  })
              return reader;
            }
            reader.readAsDataURL(file);
            // const abc = reader.onloadend()
           // console.log(reader)
          
             

            
            });  

      // })    
        input.click()
          }
            };

          
var config = new GuiConfig();
gui.add(config, 'Image Path', config['reader.result']);
gui.add(config, 'Upload Image');
// gui.add(config, 'Save Png')



gui.add(options, 'stop');
gui.add(options, 'reset');// onClick="refreshPage()");
// var guiReset = function(){
//   this['Reset'] = function(res){
// var button = document.getElementsByClassName(".reset");
//   console.log(button);
//   for (var i = 0; i < button.length; i++) {
//   button.addEventListener("onClick" ,function(e) {
// window.location.reload();
// });
//   }
// }}
// var cot = new guiReset();
// gui.add(cot, 'Reset')
//WIreFrame Color Settings

var geo = new THREE.EdgesGeometry( cube.geometry )
var mat = new THREE.LineBasicMaterial({ color :0x000000 ,	linewidth: 2,})

var wireframe = new THREE.LineSegments( geo, mat );
cube.add(wireframe)

//Wireframe color Setting GUI

  var cde = gui.addFolder('Frame Color' );
  var confi = { colour : '#ffae23' };    
  gui.addColor(confi, 'colour').onChange( function(colorValue2) {
    wireframe.material.color.set(colorValue2, 'colour')


  cde.open();
    
} )


// dropdown

// const guiOptions = {
//   SelectTextures: "Textures",
// };

// const textureloader = new THREE.TextureLoader();
// const texture1 = textureloader.load('../textures/proxy.jpeg');
// const texture2 = textureloader.load('../textures/proxy2.jpeg');
// const texture3 = textureloader.load('../textures/proxy3.jpeg');
// const texture4 = textureloader.load('../textures/proxy4.jpeg');
// const texture5 = textureloader.load('../textures/proxy5.jpeg');

// // console.log('texture2', texture2);  
// const guiTextureHash = {
//     Texture1:texture1,
//     Texture2:texture2,
//     Texture3:texture3,
//     Texture4:texture4,
//     Texture5:texture5,
// };
// /* Add to gui */
// gui.add(guiOptions, "SelectTextures", Object.keys(guiTextureHash)).onChange((value) => {
// // new THREE.TextureLoader().load(value, function (texture) {
//   var material = [
//     new THREE.MeshBasicMaterial(),
//     new THREE.MeshBasicMaterial({map:value, transparent: false}),
//     new THREE.MeshBasicMaterial(),
//     new THREE.MeshBasicMaterial(),
//     new THREE.MeshBasicMaterial(),
//     new THREE.MeshBasicMaterial(),
//    ]
//   //  var mat = new THREE.LineBasicMaterial( { color: 0x000000, linewidth: 4 } );
//   //  var wireframe = new THREE.LineSegments( geometry, material );
//   //  wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
//   //  cube.add( wireframe )
//   console.log(material)
//   // const cube = new THREE.Mesh(geometry , mat)
//   // scene.add(cube1)
//   console.log(cube)
//   material.depthtset = false;
//   cube.material = material;
//   // wireframe.push(cube);
//   material.map= value
//   //material.map.needsupdate = true;
// })
// // })


var saveLink = document.createElement('div');
saveLink.style.position = 'absolute';
saveLink.style.top = '10px';
saveLink.style.width = '100%';
saveLink.style.color = 'white !important';
saveLink.style.textAlign = 'center';
saveLink.innerHTML =
    '<a href="#" id="saveLink" style="color:#000ff0; font-size:30px; font-weight:bold;border:1px solid #000ff0;background-color: #fff; text-decoration: none ; font-family:san-serif; padding:4px 4px; border-radius:4px;" >Save Frame</a>';
document.body.appendChild(saveLink);
document.getElementById("saveLink").addEventListener('click', saveAsImage);


    function saveAsImage() {
        var imgData;

        try {
            var strMime = "image/jpeg";
            imgData = renderer.domElement.toDataURL(strMime);

            saveFile(imgData.replace(strMime, strDownloadMime), "test.jpg");

        } catch (e) {
            console.log(e);
            return;
        }

    }

    var saveFile = function (strData, filename) {
        var link = document.createElement('a');
        if (typeof link.download === 'string') {
            document.body.appendChild(link); //Firefox requires the link to be in the body
            link.download = filename;
            link.href = strData;
            link.click();
            document.body.removeChild(link); //remove the link when done
        } else {
            console.log("error")
        }
    }


//  StandoffTexture Color 

var sta = gui.addFolder('Standoff  Color' );
var off = { color : '#ffae23' };    
gui.addColor(off, 'color').onChange( function(colorValue2) {
  standoff.material.color.set(colorValue2, 'color')
  standoff2.material.color.set(colorValue2, 'color')
  standoff3.material.color.set(colorValue2, 'color')
  standoff4.material.color.set(colorValue2, 'color')


sta.open();
  
} )








// REnder Function


function animate() {
  
  requestAnimationFrame( animate  , abc);

  // required if controls.enableDamping or controls.autoRotate are set to true
  controls.update();

  renderer.render( scene, camera  );
};

animate();
  // RESIZE EVENTS
  window.addEventListener('resize', onResize);

  function onResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
  }