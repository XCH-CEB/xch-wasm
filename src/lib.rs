use lib_xch::api::handler::handler_api;
use lib_xch::api::handler::ErrorCases;
use lib_xch::api::structs::ChemicalEquation;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn balance(eqn: &str) -> String {
    match handler_api::<isize>(eqn) {
        Ok((c, v)) => get_ans(&c, &v),
        Err((ErrorCases::ParserError(e), _)) => e,
        Err((e, _)) => format!("{:?}", e),
    }
}

fn get_ans(c: &ChemicalEquation, vecs: &[Vec<isize>]) -> String {
    let mut s: String = String::new();
    s.push_str("[OUTPUT]:\n");
    for i in 0..c.sum {
        let mut flag = false;
        if vecs.len() == 1 {
            s.push_str(&format!("{}", vecs[0][i]));
        } else {
            for (index, val) in vecs.iter().enumerate() {
                if (val[i].is_positive()) && flag {
                    s.push_str("+");
                }
                match val[i] {
                    0 => (),
                    1 => {
                        s.push_str(&format!("{{k{}}}", index + 1));
                        flag = true
                    }
                    -1 => {
                        s.push_str(&format!("-{{k{}}}", index + 1));
                        flag = true
                    }
                    _ => {
                        s.push_str(&format!("{}*{{k{}}}", val[i], index + 1));
                        flag = true
                    }
                }
            }
        }
        s.push_str("   ");
    }
    s
}
