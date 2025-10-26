
const nome = document.getElementById('nome');
const foto = document.getElementById('foto');
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');

const preview = '';

if(foto) {
    preview += `<img src="${foto.value}" alt="${nome}" class="profile-img" onerror="this.style.display='none'"
    >`;
}
else {
    previewHTML += `
                <div class="profile-img bg-light d-flex align-items-center justify-content-center mx-auto">
                <span class="text-muted">Sem foto</span>
                    </div>     `;
            }
if (link1) {
    previewHTML += `
        <a href="${link1}" target="_blank" class="bio-link">
            🔗 Link 1
        </a>
                `;
            }
            
if (link2) {
    previewHTML += `
        <a href="${link2}" target="_blank" class="bio-link">
            🔗 Link 2
         </a>
                `;
            }
            
            // Se nenhum link for preenchido
if (!link1 && !link2) {
        previewHTML += `
        <div class="text-white-50">
                Adicione links no formulário
        </div>
                `;
            }
            
            // Atualizar o preview
document.getElementById('previewContent').innerHTML = previewHTML;
        
        
        // Gerar preview automaticamente quando os campos forem alterados
document.addEventListener('DOMContentLoaded', function() {
            const inputs = document.querySelectorAll('#bioForm input');
            inputs.forEach(input => {
                input.addEventListener('input', gerarPreview);
            });
        });