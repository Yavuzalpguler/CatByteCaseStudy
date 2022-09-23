import {useEffect} from 'react';
import {useSelector} from 'react-redux';

const useGetStoreValues = (storeName, fieldName) => {
  useEffect(() => {
    if (
      storeName === null ||
      storeName === undefined ||
      storeName === '' ||
      fieldName === null ||
      fieldName === undefined ||
      fieldName === ''
    ) {
      // eslint-disable-next-line no-alert
      alert('useGetStoreValues storeName,fieldName boş olamaz');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const loading = useSelector(
    state => state?.[storeName]?.[fieldName]?.loading,
  );
  const success = useSelector(
    state => state?.[storeName]?.[fieldName]?.success,
  );
  const data = useSelector(state => state?.[storeName]?.[fieldName]?.data);
  const message = useSelector(
    state => state?.[storeName]?.[fieldName]?.message,
  );
  const status_code = useSelector(
    state => state?.[storeName]?.[fieldName]?.status_code,
  );
  return [loading, success, data, message, status_code];
};

export default useGetStoreValues;
