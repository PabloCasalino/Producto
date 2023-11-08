import React from "react";

export async function obtenerProducto() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json()
  return data;
}

export async function obtenerProductoPorId(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  const data = await response.json()
  return data
}

