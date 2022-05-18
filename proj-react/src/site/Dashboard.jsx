export function Dashboard(){
    return (
        <div className="whiteBox">
            <div className="painelUm">
                <div class="element">
                    <input type="text" class="descricao" placeholder="Descrição"/>
                    <button className="adc">ADICIONAR</button><br />
                </div>
                <div class="element">
                    <input type="date" id="data" />
                    <input type="text" id="local" placeholder="Local"/>
                    <button className="limpar">LIMPAR</button>
                </div>
                
            </div>
        </div>
    );
}
