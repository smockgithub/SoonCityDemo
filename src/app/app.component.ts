import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as $ from 'jquery'

declare var GongVue:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  gongVue;
  sbm_array = [];
  sbm_index = 0;

  @ViewChild('mydiv') myidv: ElementRef;

  constructor() {
    
  }

  ngOnInit() {
    this.gongVue = new GongVue();
  }

  loadModel(){
    var option = {
      showGird: false,
      enableSelect: false
    };
    
    this.gongVue.init(this.myidv.nativeElement, this.huidiaofangfa(), option);
    this.gongVue.setBackgroundColor(0x4495F0);
    //ambient light
    this.gongVue.createAmbientLight({ color: 0x9a9a9a, name: "MainAmbientLight" });
    //directional light
    this.gongVue.createDirectionalLight({ colo: 0xffffff, intensity: 1.0, name: "MainDirectionalLight", direction: { x: 1, y: 0.5, z: 0.8 } });
    //hemisphere light
    this.gongVue.createHemisphereLight({ skyColor: 0x4495F0, groundColor: 0xABAEAD, intensity: 0.05, name: "MainHemisphereLight", position: { x: 0, y: 0, z: 10 } });

    var fileArray = [];
    var sbminfo0 = {
      id: "0",
      name: "1F",
      fileUrl: "assets/model/K-Shop0923/K-Shop0923_1F_0.sbm",
      useBufferGeometry: true,
      scale: 1.0,
      totalSBMs: 1,
      currentSBMs: 0,
      textureUrl: "assets/model/K-Shop0923/Maps/",
      baseFloor: 1
    };
    var sbminfo1 = {
      id: "1",
      name: "1F",
      fileUrl: "assets/model/GothamCity/150723_GothamCity_1F_0.sbm",
      useBufferGeometry: true,
      scale: 1.0,
      totalSBMs: 1,
      currentSBMs: 0,
      textureUrl: "assets/model/GothamCity/Maps/",
      baseFloor: 1
    };
    var sbminfo2 = {
      id: "2",
      name: "1F",
      fileUrl: "assets/model/SnowLand/150723_SnowLand_1F_0.sbm",
      useBufferGeometry: true,
      scale: 1.0,
      totalSBMs: 1,
      currentSBMs: 0,
      textureUrl: "assets/model/SnowLand/Maps/",
      baseFloor: 1
    };
    var sbminfo3 = {
      id: "3",
      name: "1F",
      fileUrl: "assets/model/version3/version3_1F_0.sbm",
      useBufferGeometry: true,
      scale: 1.0,
      totalSBMs: 1,
      currentSBMs: 0,
      textureUrl: "assets/model/version3/Maps/",
      baseFloor: 1
    };

    this.sbm_array.push(sbminfo0);
    this.sbm_array.push(sbminfo1);
    this.sbm_array.push(sbminfo2);
    this.sbm_array.push(sbminfo3);

    fileArray.push(this.sbm_array[this.sbm_index]);
    this.gongVue.importSBM("SBM", fileArray, this.huidiaoonLoad());
  }

  huidiaofangfa() { }
  huidiaoonLoad(){
    var bb = this.gongVue.getSceneBoundingBox(true);
    //this.gongVue.setViewpoint(VIEWPOINT.RIGHTTOP, bb.min, bb.max, false);
  }
}
