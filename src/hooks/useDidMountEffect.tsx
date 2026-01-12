import { useEffect, useRef, EffectCallback, DependencyList } from "react";

/**
 * 초기 마운트 시에는 실행되지 않고, 이후 업데이트 시에만 실행되는 useEffect 훅의 커스텀 버전입니다.
 *
 * effect 마운트 이후 실행될 함수 (클린업 함수 반환 가능)
 * deps 이펙트를 다시 실행해야 하는 종속성 배열
 */
export function useDidMountEffect(
  effect: EffectCallback,
  deps?: DependencyList
): void {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      // 마운트가 완료된 후이므로 effect 함수 실행
      return effect();
    } else {
      // 첫 번째 렌더링 시에는 didMount.current 값을 true로 설정하고 effect 실행을 스킵
      didMount.current = true;
    }
  }, deps); // deps 배열이 변경될 때마다 이펙트 재실행 (첫 렌더링 제외)
}
