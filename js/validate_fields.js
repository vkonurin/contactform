
      $(document).ready(function(){


         $('input#txtname, input#txtemail, textarea#txtmessage').unbind().blur( function(){


             var id = $(this).attr('id');
             var val = $(this).val();


           switch(id)
           {


                 case 'txtname':
                    var rv_name = /^[a-zA-Zа-яА-Я]+$/;

                    if(val.length > 2 && val != '' && rv_name.test(val))
                    {
                       $(this).addClass('not_error');
                       $(this).next('.error-box').css('color','green')
                                                 .animate({'paddingLeft':'5px'},400)
                                                 .animate({'paddingLeft':'0px'},400)
                    }



                    else
                    {
                       $(this).removeClass('not_error').addClass('error');
                       $(this).next('.error-box').css('color','red')
                                                  .animate({'paddingLeft':'5px'},400)
                                                  .animate({'paddingLeft':'0px'},400)
                    }
                break;

               case 'txtemail':
                   var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
                   if(val != '' && rv_email.test(val))
                   {
                      $(this).addClass('not_error');
                      $(this).next('.error-box').css('color','green')
                                                .animate({'paddingLeft':'5px'},400)
                                                .animate({'paddingLeft':'0px'},400)
                   }
                   else
                   {
                      $(this).removeClass('not_error').addClass('error');
                      $(this).next('.error-box').css('color','red')
                                                 .animate({'paddingLeft':'5px'},400)
                                                 .animate({'paddingLeft':'0px'},400)
                   }
               break;



              case 'txtmessage':
                  if(val != '' && val.length < 5000)
                  {
                     $(this).addClass('not_error');
                     $(this).next('.error-box').css('color','green')
                                               .animate({'paddingLeft':'5px'},400)
                                               .animate({'paddingLeft':'0px'},400)
                  }
                  else
                  {
                     $(this).removeClass('not_error').addClass('error');
                     $(this).next('.error-box').css('color','red')
                                               .animate({'paddingLeft':'5px'},400)
                                               .animate({'paddingLeft':'0px'},400)
                  }
              break;


           } // end switch(...)

         }); // end blur()



         $('form#feedback-form').submit(function(e){


             e.preventDefault();



             if($('.not_error').length == 3)
             {


                 $.ajax({
                        url: 'send.php',
                        type: 'post',
                        data: $(this).serialize(),

                        beforeSend: function(xhr, textStatus){
                             $('form#feedback-form :input').attr('disabled','disabled');
                        },

                       success: function(response){
                            $('form#feedback-form :input').removeAttr('disabled');
                            $('form#feedback-form :text, textarea').val('').removeClass().next('.error-box').text('');
                            alert(response);
                       }
                }); // end ajax({...})
            }
            else
            {
              return false;
            }



       }); // end submit()


      }); // end script
