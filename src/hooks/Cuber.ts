import {Names, Surface, useSurface} from "./Surface"

interface Cuber {
  cuberName: string;
  width: number;
  height: number;
  depth: number
  surfaces: Surface[]
}

export function useCuber(cuberName: string, w: number, h: number, d: number): Cuber {
  const names: Names[] = ['up', 'down', 'left', 'right', 'front', 'back']
  const surfaces = names.map((v) => {
    return useSurface(v, w, h, d)
  })

  return {
    cuberName,
    width: w,
    height: h,
    depth: d,
    surfaces,
  }
}
