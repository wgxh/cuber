import { reactive } from "@vue/reactivity";

export type Names = 'up' | 'down' | 'left' | 'right' | 'front' | 'back'
export interface Surface {
  /**
   * 面的X轴旋转角度
   */
  rotateX: number;
  /**
   * 面的Y轴旋转角度
   */
  rotateY: number;
  /**
   * 面的Z轴平移度数
   */
  translateZ: number;
  /**
   * 面的宽度
   */
  width: number | string;
  /**
   * 面的高度
   */
  height: number | string;
  /**
   * 面的名字
   */
  name: string;
}

/**
 * 处理名字参数的函数，返回一个处理好的面对象
 * 
 * @param surfaceName - 面的名称
 * @param w - 面的宽度
 * @param h - 面的高度
 * @param d - 面的深度
 */
function resolveName(surfaceName: Names, w: number, h: number, d: number): Surface | undefined {
  switch(surfaceName) {
    case 'up':
      return reactive<Surface>({
        "name": surfaceName,
        "width"      : w,
        "height"     : d,
        "rotateX"    : 90,
        "rotateY"    : 0,
        "translateZ" : d / 2,
      })
    case 'down':
      return reactive<Surface>({
        "name": surfaceName,
        "width"      : w,
        "height"     : d,
        "rotateX"    : -90,
        "rotateY"    : 0,
        "translateZ" : d / 2,
      })
    case 'left':
      return reactive<Surface>({
        "name": surfaceName,
        "width"      : d,
        "height"     : h,
        "rotateX"    : 0,
        "rotateY"    : 90,
        "translateZ" : d / 2,
      })
    case 'right':
      return reactive<Surface>({
        "name": surfaceName,
        "width"      : d,
        "height"     : h,
        "rotateX"    : 0,
        "rotateY"    : -90,
        "translateZ" : d / 2,
      })
    case 'front':
      return reactive<Surface>({
        "name": surfaceName,
        "width"      : w,
        "height"     : h,
        "rotateX"    : 0,
        "rotateY"    : 0,
        "translateZ" : d / 2,
      })
    case 'back':
      return reactive<Surface>({
        "name": surfaceName,
        "width"      : w,
        "height"     : h,
        "rotateX"    : 0,
        "rotateY"    : 180,
        "translateZ" : d / 2,
      })
  }
}

/**
 * 该钩子函数返回一个面所需要的对象
 *
 * @param surfaceName - 面的名称
 * @param w - 正方体宽度
 * @param h - 正方体高度
 * @param d - 正方体深度
 */
export function useSurface(surfaceName: Names, w: number, h: number, d: number): Surface {
  const { width, height, rotateX, rotateY, translateZ } = resolveName(surfaceName, w, h, d)!

  return {
    name: surfaceName,
    width,
    height,
    rotateX,
    rotateY,
    translateZ,
  }
}
