
const SERVER = process.env.SERVER

export const getAllUsers = async () => {
    try {
      const resp = await fetch(`http://localhost:3636/users`, {
        cache: 'no-cache',
      });

      if (resp.ok) {
        const result = await resp.json();
  
        return result
      } else {
        console.error(`Error: ${resp.status} - ${resp.statusText}`);
        return null;
      }
    } catch (err) {
      console.error(err);
      return null;
    }
  };
  