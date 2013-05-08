var tkAnimationProto = function(name) {
  return {
    publish: {
      animationName: name,
      targetLabel: '(no target)'
    },
    targetChanged: function() {
      this.super(),
      this.targetLabel = this.target ? this.target.id : '(no target)';
    },
    clickHandler: function() {
      setTimeout(this.play.bind(this), 500);
    }
  };
};
