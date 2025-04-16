import { AppColors } from "@/styles/colors";
import { AppTextStyles } from "@/styles/textStyles";

/**
 * 각 UI 컴포넌트(Input, Label 등)에 적용되는 스타일 상수 정의
 * 이 파일은 반응형 레이아웃을 구성하는 데 필요한 상수값들을 정의합니다.
 * 각 UI 컴포넌트에 필요한 스타일이 필요할 때, 이 파일에서 정의 합니다.
 * 
 * Style constants for UI components (Input, Label, etc.)
 * This file defines constants used for responsive layout configuration.
 * Each UI component's styles are defined here for easy access.
 * 
 */

export const InputStyles = {
  containerMaxWidth: {
    mobile: "100%",
    tablet: "360px",
    desktop: "400px",
  },
  containerPadding: {
    mobile: "4px 0",
    tablet: "5px 0",
    desktop: "6px 0",
  },
  height: {
    mobile: "500px",
    tablet: "48px",
    desktop: "100px",
  },
  radius: {
    mobile: "12px",
    tablet: "14px",
    desktop: "16px",
  },
  padding: {
    mobile: "8px",
    tablet: "9px",
    desktop: "10px",
  },
  paddingRightWithSuffix: {
    mobile: "32px",
    tablet: "36px",
    desktop: "40px",
  },
  suffixIconRight: {
    mobile: "8px",
    tablet: "9px",
    desktop: "10px",
  },
};

export const LabelStyles = {
  fontSize: {
    mobile: AppTextStyles.body2.fontSize,
    tablet: AppTextStyles.body1.fontSize,
    desktop: AppTextStyles.title3.fontSize,
  },
  color: AppColors.onBackground,
  marginBottom: {
    mobile: "6px",
    tablet: "8px",
    desktop: "10px",
  },
  width: {
    mobile: "80px",
    tablet: "100px",
    desktop: "120px",
  },
};
