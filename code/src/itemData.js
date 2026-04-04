export const brokenItems = [
            { id: 1, name: 'Item 1', value: 100 },
            { id: 2, name: 'Item 2', value: 200 },
            { id: 3, name: 'Item 3', value: -50 } // This will cause an error
          ];
export const workingItems = [
            { id: 1, name: 'Item 4', value: 50 },
            { id: 2, name: 'Item 5', value: 150 },
            { id: 3, name: 'Item 6', value: 200 } // No error here
          ]