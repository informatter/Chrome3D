import {WebGLRenderer}  from "https://cdn.skypack.dev/three@0.137.5";

export function createRenderer(){

    const renderer = new WebGLRenderer();

    return renderer;
}