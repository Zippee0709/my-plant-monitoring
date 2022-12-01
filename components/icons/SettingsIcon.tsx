import React from 'react';

interface ISettingsIconProps {
  color?: string;
  width?: number;
  height?: number;
}

const SettingsIcon = ({ color = '#000000', width = 24, height = 24 }: ISettingsIconProps) => {
  return (
    <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path
        fill={color}
        d='M12.6 20.936h-1.3a.883.883 0 0 1-.852-.654l-.774-2.833-2.5 1.435a.886.886 0 0 1-1.06-.138l-.925-.919a.884.884 0 0 1-.143-1.066l1.469-2.545-.006-.016-2.787-.747a.882.882 0 0 1-.654-.851V11.3a.882.882 0 0 1 .652-.85l2.839-.777L5.12 7.171a.885.885 0 0 1 .141-1.062l.918-.918a.885.885 0 0 1 1.061-.142l2.552 1.465h.012l.745-2.79a.881.881 0 0 1 .851-.655h1.3a.883.883 0 0 1 .852.655l.762 2.838 2.509-1.441a.885.885 0 0 1 1.059.138l.926.919a.882.882 0 0 1 .141 1.067l-1.466 2.532.008.022 2.786.746a.883.883 0 0 1 .653.851v1.3a.883.883 0 0 1-.654.852l-2.837.774 1.439 2.505a.881.881 0 0 1-.141 1.063l-.917.917a.888.888 0 0 1-1.063.141l-2.539-1.462-.018.014-.745 2.785a.885.885 0 0 1-.855.651Zm-1.21-1h1.119l.738-2.756a.888.888 0 0 1 .528-.592l.134-.052a.873.873 0 0 1 .76.057l2.51 1.445.789-.789-1.423-2.478a.881.881 0 0 1-.048-.78l.052-.125a.875.875 0 0 1 .584-.51l2.8-.749v-1.12l-2.755-.737a.885.885 0 0 1-.592-.529l-.052-.132a.882.882 0 0 1 .057-.763l1.449-2.508-.8-.79-2.48 1.425a.878.878 0 0 1-.772.052l-.115-.047a.888.888 0 0 1-.518-.588l-.748-2.806h-1.115l-.738 2.762a.883.883 0 0 1-.539.6l-.12.045a.874.874 0 0 1-.751-.058L6.822 5.962l-.789.789 1.422 2.476a.886.886 0 0 1 .046.785l-.051.12a.876.876 0 0 1-.579.5l-2.8.758v1.121l2.757.738a.889.889 0 0 1 .591.525l.048.121a.874.874 0 0 1-.055.77l-1.454 2.516.8.791 2.47-1.419a.878.878 0 0 1 .787-.045l.106.044a.874.874 0 0 1 .526.591Zm-1.64-2.454h.008Zm-.15-.061h.007Zm-3.113-3.274Zm.044-4.411Zm7.724-3.2Z'
      />
      <path fill={color} d='M12 15a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm0-5a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z' />
    </svg>
  );
};

export default React.memo(SettingsIcon);
