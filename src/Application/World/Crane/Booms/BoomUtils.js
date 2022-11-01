// returns hypotenuse of triangle formed by rotated cylinder
    import {deg2rad} from "../../../Utils/Math";

export function cylHyp(deg, height) {
    let radNew = deg2rad(180 - 90 - deg)
    return height / Math.sin(radNew)
}

// returns x of triangle formed by rotated cylinder
export function cylX(deg, hyp) {
    let radNew = deg2rad(180 - 90 - deg)
    return Math.cos(radNew) * hyp
}

export function cosHyp(length, deg) {
    let radNew = deg2rad(180 - 90 - deg)
    return height / Math.sin(radNew)
}



