import { supabase } from "./supabase";

export async function getWHoleMenu() {
  let { data: Menu, error } = await supabase
    .from("Menu")
    .select("")
    .order("id");

  if (error) {
    console.error(error);
    throw new Error("Menu could not be loaded");
  }
  return Menu;
}

export async function getRice() {
  let { data: Menu, error } = await supabase
    .from("Menu")
    .select("*")
    .eq("dishCategory", "rice")
    // .ilike("dishCategory", "rice")
    .order("id");
  if (error) {
    console.error(error);
    throw new Error("Menu could not be loaded");
  }
  return Menu;
}

export async function getGravy() {
  let { data: Menu, error } = await supabase
    .from("Menu")
    .select("")
    .eq("dishCategory", "Gravy")
    .order("id");
  if (error) {
    console.error(error);
    throw new Error("Menu could not be loaded");
  }
  return Menu;
}

export async function getDessert() {
  let { data: Menu, error } = await supabase
    .from("Menu")
    .select("")
    .ilike("dishCategory", "Desert")
    .order("id");
  if (error) {
    console.error(error);
    throw new Error("Menu could not be loaded");
  }
  return Menu;
}
