export function deg2rad(degrees) {
    return degrees * (Math.PI / 180);
}

export function rad2deg(rad) {
    return rad * 180 / Math.PI;
}

// returns hypotenuse of triangle formed by rotated cylinder
export function cylHyp(deg, height) {
    let radNew = deg2rad(180 - 90 - deg)
    return height / Math.sin(radNew)
}

// returns x of triangle formed by rotated cylinder
export function cylX(deg, hyp) {
    let radNew = deg2rad(180 - 90 - deg)
    return Math.cos(radNew) * hyp
}


