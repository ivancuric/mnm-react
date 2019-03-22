import { useEffect } from 'react';

/**
 * @param {String} helloMessage
 * @param {React.FunctionComponent} component
 */

function useHello(helloMessage, component) {
  useEffect(() => {
    console.log(`${helloMessage} ${component.name}`);
  }, []);
}

export { useHello };
