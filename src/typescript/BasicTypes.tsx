
const BasicTypes = () => {
    const name: string = 'Danny';
    const age: number = 31;
    const isActive: boolean = true;

    const powers: string[] = ['React', 'ReactNative', 'Astro'];

    return (
        <>
            <div>Tipos básicos</div>
            {name} - {age} - {isActive ? 'Activo' : 'Inativo'}
            <p>{powers.join(', ')}</p>
        </>
    )
}

export default BasicTypes