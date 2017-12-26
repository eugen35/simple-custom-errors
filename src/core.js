// @todo /3/ Разместить в npm
export function createCustomErrorClass(className){
  return class extends Error {
    constructor (message, info) {
      super(message, info);

      // Calling parent constructor of base Error class.
      super(message);

      // Saving class name in the property of our custom error as a shortcut.
      // this.name = this.constructor.name; // - in browser work good, in node returns 'Error' instead of CustomError
      this.name = className;

      // Capturing stack trace, excluding constructor call from it.
      Error.captureStackTrace(this, this.constructor);

      Object.assign(this, info); // Добавляем туда те свойства, которые захотел поместить создатель
    }
  }
}