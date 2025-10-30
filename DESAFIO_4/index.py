
import sys
import os 
import shutil

sys.path.append('../documentos')

caminho_base = 'DESAFIO_4/documentos/'

def leitura_arquivo(arquivo):
    try:
        file = open(arquivo, 'r', encoding='utf-8')
        conteudo = file.read()
        file.close()
        return conteudo
    except FileNotFoundError:
        print("Arquivo não encontrado.")
        return None    
 
def escrita_arquivo(arquivo, conteudo):
    try:
        file = open(arquivo, 'w', encoding='utf-8')
        file.write(conteudo)
        file.close()
        
    except FileNotFoundError:
        print("Arquivo não encontrado.")
        
    
def extensao (arquivo):
    
    try:
        a='DESAFIO_4/documentos/'+arquivo
        extension = os.path.splitext(a)[1]   
        return extension
    
    except Exception as e :
        
        print(f'Erro ao obter a extensão do arquivo: {e}')

def organizar_arquivos(arquivo):
    
    if not arquivo:
        print('Especifique o arquivo')
        
        
    pasta_documentos_textuais = 'DESAFIO_4/documentos/pasta_documentos_textuais'
    os.makedirs(pasta_documentos_textuais, exist_ok=True)
        
    if extensao(arquivo) == '.txt' or extensao(arquivo) == '.pdf' or extensao(arquivo) == '.docx':
        try:
            caminho = 'DESAFIO_4/documentos' + arquivo
            
            shutil.move(caminho, pasta_documentos_textuais)
            
            print('Arquivo movido com sucesso!')
            
        except Exception as e:
            
            print(f'Erro ao mover o arquivo: {e}')
            
    if extensao(arquivo) == '.png' or extensao(arquivo) == '.jpg' or extensao(arquivo) == '.jpeg':
            
            try:
                pasta_imagens = 'DESAFIO_4/documentos/pasta_imagens'
                
                os.makedirs(pasta_imagens, exist_ok=True)
                
                caminho = 'DESAFIO_4/documentos' + arquivo
                
                shutil.move(caminho, pasta_imagens)
                
                
            except Exception as e:
                
                print('Erro ao mover o arquivo:')
                print(e)
        


organizar_arquivos('horario.pdf')
