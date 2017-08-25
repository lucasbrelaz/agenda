(function() {
  'use strict';

  describe('controllers', function(){
    var vm;
    var $timeout;
    var toastr;

    beforeEach(module('generator'));
    beforeEach(inject(function(_$controller_, _$timeout_, _webDevTec_, _toastr_) {
      spyOn(_webDevTec_, 'getTec').and.returnValue([{}, {}, {}, {}, {}]);
      spyOn(_toastr_, 'info').and.callThrough();

      vm = _$controller_('ListarController');
      $timeout = _$timeout_;
      toastr = _toastr_;
    }));
  });
})();
