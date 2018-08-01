
const getIdService = () => {
    return new IdService();
}

class IdService {
    getCurrentId(){
        return 'ggg';
    }
}
export  {getIdService}