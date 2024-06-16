declare module '*.svg' {
  const content: string;
  export default content;
}
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';